<?php
// Connect to the database
$host = "localhost";
$user = "username";
$password = "password";
$dbname = "database_name";
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert form data into the database
$sql = "INSERT INTO contacts (name, email, message) VALUES (?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();

// Check if the insert was successful
if ($stmt->affected_rows > 0) {
    echo "Message sent successfully!";
} else {
    echo "Error: ". $sql. "<br>". $conn->error;
}

// Close connection
$stmt->close();
$conn->close();
?>