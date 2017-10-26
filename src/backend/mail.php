<?php
	include "conf.php";
	foreach (glob("lib/phpmailer/*.php") as $filename)
	{
	    include $filename;
	}

	phpinfo();

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	$mail = new PHPMailer(true);
	try {
		$mail->IsSMTP();
		$mail->CharSet = 'UTF-8';

		$mail->Host       = "smtp.gmail.com"; // SMTP server example
		$mail->SMTPSecure = "tls";
		$mail->SMTPDebug = 4;
		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->Port       = $MAIL_PORT;                    // set the SMTP port for the GMAIL server
		$mail->Username   = $MAIL_USER_NAME; // SMTP account username example
		$mail->Password   = $MAIL_USER_PASSWORD;    

		$mail->setFrom($MAIL_USER_NAME, 'dostavka24.pl');
	    $mail->addAddress($ADMIN_MAIL_ADDRESS, 'Site owner'); 
	    $mail->Subject = 'Here is the subject';

		$bodyText = "Заказ звонка <br/>
			Имя: ".$_POST["customerName"]."<br>
			Номер телефона: ".$_POST["phoneNumber"];
		$mail->IsHTML(true);
		$mail->Body    = $bodyText;
		$mail->Subject = "Заказ звонка"; 
	    $mail->send();
	}
	catch (Exception $e) {
	    echo 'Message could not be sent.';
    	echo 'Mailer Error: ' . $mail->ErrorInfo;
	}
?> 