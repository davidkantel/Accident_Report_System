<?php
session_start();
include 'config/database.php';

$user_id = $_SESSION['user_id'];
$date = $_POST['date'];
$time = $_POST['time'];
$location = $_POST['location'];
$description = $_POST['description'];
$status = 'pending';

$sql = "INSERT INTO reports (user_id, date, time, location, description, status) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$user_id, $date, $time, $location, $description, $status]);

header('Location: ../dashboard.php');
?>
