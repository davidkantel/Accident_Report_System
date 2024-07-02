<?php
include 'config/database.php';

$id = $_GET['id'];

$sql = "DELETE FROM reports WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);

echo json_encode(['success' => true]);
?>
