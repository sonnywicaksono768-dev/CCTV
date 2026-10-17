# ============================================================
# cek-siaran.ps1
# Menguji apakah SIARAN (stream) tiap kamera benar-benar hidup,
# dengan meminta daftar putar HLS dari server MediaMTX lokal (:8888).
#
#   HTTP 200 + isi "#EXTM3U"  -> siaran SIAP (path online di MediaMTX)
#   selain itu (404/500/…)     -> siaran BELUM siap
#
# Berbeda dari cek-kamera.ps1 (yang hanya mengetes host:port sumber),
# script ini mengetes hasil akhir: apakah MediaMTX berhasil menarik
# sumber dan menyiarkannya.
#
# Jalankan DI SERVER PUSAT (MediaMTX sedang berjalan):
#   powershell -ExecutionPolicy Bypass -File .\cek-siaran.ps1
# ============================================================

param(
    [string]$Config     = (Join-Path $PSScriptRoot 'mediamtx.yml'),
    [string]$HlsBase    = 'http://127.0.0.1:8888',
    [int]   $TimeoutSec = 15
)

if (-not (Test-Path $Config)) {
    Write-Host "Config tidak ditemukan: $Config" -ForegroundColor Red
    exit 2
}

# Ambil nama path kamera (indent 2 spasi, diawali 'kamera_')
$paths = New-Object System.Collections.Generic.List[string]
foreach ($line in Get-Content -LiteralPath $Config) {
    if ($line -match '^\s{2}(kamera_[A-Za-z0-9_]+):\s*$') {
        $paths.Add($Matches[1])
    }
}

if ($paths.Count -eq 0) {
    Write-Host "Tidak ada path kamera yang terbaca di $Config" -ForegroundColor Red
    exit 2
}

$results = New-Object System.Collections.Generic.List[object]
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

foreach ($p in $paths) {
    $url = "$HlsBase/$p/index.m3u8"
    $ok  = $false
    for ($attempt = 1; $attempt -le 2 -and -not $ok; $attempt++) {
        try {
            $resp = Invoke-WebRequest -Uri $url -TimeoutSec $TimeoutSec -UseBasicParsing -ErrorAction Stop
            if ($resp.StatusCode -eq 200 -and $resp.Content -match '#EXTM3U') { $ok = $true }
        } catch {
            $ok = $false
        }
    }
    $tag   = if ($ok) { 'SIAP ' } else { 'BELUM' }
    $color = if ($ok) { 'Green' } else { 'Red' }
    Write-Host ("{0}  {1}" -f $tag, $p) -ForegroundColor $color
    $results.Add([pscustomobject]@{ Path = $p; Ready = $ok })
}

$total = $results.Count
$okc   = ($results | Where-Object { $_.Ready }).Count
$pct   = if ($total -gt 0) { [math]::Round($okc * 100 / $total, 1) } else { 0 }

Write-Host ""
Write-Host "============================================"
Write-Host ("SIARAN SIAP: {0} / {1}  ({2}%)" -f $okc, $total, $pct)
Write-Host "============================================"

$belum = $results | Where-Object { -not $_.Ready }
if ($belum.Count -gt 0) {
    Write-Host ""
    Write-Host "Siaran BELUM siap:" -ForegroundColor Yellow
    $belum | ForEach-Object { Write-Host ("  - {0}" -f $_.Path) }
}
