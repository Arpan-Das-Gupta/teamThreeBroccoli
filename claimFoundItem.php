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

$to = $email;
$subject = "Found Item Notification";
$message = "An item of type '$productType' has been found. Please check the platform for more details.";
$headers = "From: no-reply@example.com";

mail($to, $subject, $message, $headers);


$sql = "DELETE FROM lost_items WHERE email='$email' AND product_type='$productType'";

$conn->query($sql);
echo json_encode(['status' => 'success']);

$conn->close();
?>
