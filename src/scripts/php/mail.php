<?php

$name = $_POST['name'];
$email = $_POST['email']
$pay = $_POST['pay_option'];

$mail_message = '
    <html>
        <head>
            <title>Contact</title>
        </head>
        <body>
            <h2>new contact</h2>
            <ul>
                <li>Name: ' . $name . '</li>
                <li>E-mail addres: ' . $email . '</li>
                <li>Comments: ' . $comments . '</li>
            </ul>
        </body>
    </html>    
    ';

$headers = "From: site administator <admin@loftschool.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
$mail = mail('shabalinastya@gmail.com', 'new contact', $mail_message, $headers);
$data = [];
if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "letter is sucсessfully send";
}else{
    $data['status'] = "NO";
    $data['mes'] = "an error has occurred on the server";
}
echo json_encode($data);
    

?>