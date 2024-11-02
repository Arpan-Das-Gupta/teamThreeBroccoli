<?php

$host = 'localhost';
$db = 'your_database';
$user = 'your_username';
$pass = 'your_password';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$data = json_decode(file_get_contents('php://input'), true);

$email = $conn->real_escape_string($data['email']);
$productType = $conn->real_escape_string($data['productType']);
$date = $conn->real_escape_string($data['date']);
$details = $conn->real_escape_string($data['details']);

$sql = "INSERT INTO lost_items (email, product_type, date, details) VALUES ('$email', '$productType', '$date', '$details')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => $conn->error]);
}

$conn->close();
?>
