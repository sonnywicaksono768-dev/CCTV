<?php
session_start();

// Kosongkan seluruh data sesi
$_SESSION = [];

// Hapus cookie sesi di browser
if (ini_get('session.use_cookies')) {
    $p = session_get_cookie_params();
    setcookie(session_name(), '', [
        'expires'  => time() - 42000,
        'path'     => $p['path'],
        'domain'   => $p['domain'],
        'secure'   => $p['secure'],
        'httponly' => $p['httponly'],
        'samesite' => $p['samesite'] ?: 'Lax',
    ]);
}

// Hancurkan sesi di server
session_destroy();

header('Cache-Control: no-store');
header('Location: index.php');
exit;