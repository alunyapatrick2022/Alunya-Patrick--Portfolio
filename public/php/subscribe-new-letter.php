<?php
$servername = "mysql8001.site4now.net";
$username = "aabfb2_expense";
$password = "P0717820671a.";
$dbname = "db_aabfb2_expense";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the email from POST data
$email = isset($_POST['email']) ? $_POST['email'] : '';

// Check if email is valid
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Invalid email format';
    exit;
}

// Insert email into database
$sql = "INSERT INTO news_letter_subcribers (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo 'New record created successfully';
} else {
    http_response_code(500);
    echo 'Error: ' . $sql . '<br>' . $conn->error;
}

$conn->close();
?>
