<?php
$servername = "localhost";
$username = "root"; // Ganti dengan username MySQL Anda
$password = "020822"; // Ganti dengan password MySQL Anda
$dbname = "users_db";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
