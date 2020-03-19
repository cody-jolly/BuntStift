<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['nachricht'])) {
  $name = trim($_POST['name']);
  $email = trim($_POST['email']);
  $nachricht = trim($_POST['nachricht']);
  $to = 'jolly.cody@gmail.com';
  $subject = 'Buntstift: Neue Nachricht';
  $body = '<html>
            <body>
              <h2>Buntstift: Neue Nachricht</h2>
              <hr>
              <p>Name: '.$name.'</p>
              <p>Email: '.$email.'</p>
              <p>Nachricht: '.$nachricht.'</p>
            </body>
          </html>';
  $headers = "From: {$name}<{$email}>\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8";
  $send = mail($to, $subject, $body, $headers);
  if ($send) {
    header("Location: /nachricht-bestaetigung.html");
  } else {
    echo 'error';
  }
}
?>