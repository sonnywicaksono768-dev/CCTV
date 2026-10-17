# ============================================================
# cek-kamera.ps1
# Menguji keterjangkauan (host:port TCP) sumber RTSP setiap kamera
# yang terdaftar di mediamtx.yml, lalu melaporkan berapa yang terhubung.
#
# Jalankan DI SERVER PUSAT (yang menjalankan MediaMTX), saat Tailscale aktif:
#   powershell -ExecutionPolicy Bypass -File .\cek-kamera.ps1
#
# Catatan: tes ini memverifikasi host:port sumber bisa dijangkau.
# "OK" = relay/NVR/kamera merespons di port tersebut. Bila ingin tahu
# apakah path-nya benar-benar ada di relay, perlu tes RTSP penuh (ffprobe).
# ============================================================

param(
    [string]$Config    = (Join-Path $PSScriptRoot 'mediamtx.yml'),
    [int]   $TimeoutMs = 3000
)

if (-not (Test-Path $Config)) {
    Write-Host "Config tidak ditemukan: $Config" -ForegroundColor Red
    exit 2
}

$results = New-Object System.Collections.Generic.List[object]
$currentPath = $null

foreach ($line in Get-Content -LiteralPath $Config) {
    # Baris nama path: indent 2 spasi, diakhiri ':'
    if ($line -match '^\s{2}([A-Za-z0-9_]+):\s*$') {
        $currentPath = $Matches[1]
        continue
    }
    # Baris source RTSP: rtsp://[user:pass@]host:port/...
    if ($line -match '^\s+source:\s*rtsp://(?:[^@/\s]+@)?([^:/\s]+):(\d+)') {
        $srcHost = $Matches[1]
        $port    = [int]$Matches[2]

        $ok = $false
        $client = New-Object System.Net.Sockets.TcpClient
        try {
            $iar = $client.BeginConnect($srcHost, $port, $null, $null)
            if ($iar.AsyncWaitHandle.WaitOne($TimeoutMs)) {
                $client.EndConnect($iar)
                $ok = $true
            }
        } catch {
            $ok = $false
        } finally {
            $client.Close()
        }

        $tag = if ($ok) { 'OK  ' } else { 'FAIL' }
        $color = if ($ok) { 'Green' } else { 'Red' }
        Write-Host ("{0}  {1,-30} {2}:{3}" -f $tag, $currentPath, $srcHost, $port) -ForegroundColor $color

        $results.Add([pscustomobject]@{
            Path = $currentPath
            Host = "${srcHost}:${port}"
            OK   = $ok
        })
    }
}

$total = $results.Count
$okc   = ($results | Where-Object { $_.OK }).Count
$pct   = if ($total -gt 0) { [math]::Round($okc * 100 / $total, 1) } else { 0 }

Write-Host ""
Write-Host "============================================"
Write-Host ("TERHUBUNG: {0} / {1}  ({2}%)" -f $okc, $total, $pct)
Write-Host "============================================"

$gagal = $results | Where-Object { -not $_.OK }
if ($gagal.Count -gt 0) {
    Write-Host ""
    Write-Host "Kamera yang GAGAL terhubung:" -ForegroundColor Yellow
    $gagal | ForEach-Object { Write-Host ("  - {0}  ({1})" -f $_.Path, $_.Host) }
}

Write-Host ""
Write-Host "Langkah lanjutan (opsional, bila ingin uji path relay benar-benar ada):"
Write-Host "  ffprobe -rtsp_transport tcp -timeout 5000000 rtsp://<host>:<port>/<nama_path>"
