<?php
include 'config/database.php';

$sql = "SELECT * FROM reports";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$reports = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reports);
?>
