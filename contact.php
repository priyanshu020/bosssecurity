<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    $mailTo = "priyanshub02031998@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name."./n/n".$message;

    mail($mailTo, $number, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>