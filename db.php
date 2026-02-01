<?php
$conn = new mysqli("localhost", "root", "", "showsnap");


if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
?>