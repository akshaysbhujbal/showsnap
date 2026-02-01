<?php
include 'db.php';


$movie = $_POST['movie_name'];
$show = $_POST['show_time'];
$price = $_POST['ticket_price'];
$viewers = $_POST['viewers'];
$total = $_POST['total_amount'];


$names = $_POST['viewer_name'];
$ages = $_POST['viewer_age'];
$genders = $_POST['viewer_gender'];
$mobiles = $_POST['viewer_mobile'];


for ($i = 0; $i < count($names); $i++) {
$sql = "INSERT INTO bookings
(movie_name, show_time, ticket_price, viewers, name, age, gender, mobile, total_amount)
VALUES ('$movie','$show','$price','$viewers',
'{$names[$i]}','{$ages[$i]}','{$genders[$i]}','{$mobiles[$i]}','$total')";


$conn->query($sql);
}


header("Location: success.php");
?>