<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];
    
    // Save the data in a file or database (you can adjust as needed)
    $file = fopen("feedback.txt", "a");
    fwrite($file, "Name: $name\nEmail: $email\nFeedback: $feedback\n\n");
    fclose($file);

    echo "Thank you for your feedback!";
}
?>
