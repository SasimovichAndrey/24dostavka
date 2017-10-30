<?php
	include "MailBodyComposer.php";

	try {
		$mail = MailBodyComposer::getMail();
	    $mail->send();
	}
	catch (Exception $e) {
	    echo 'Message could not be sent.';
    	echo 'Mailer Error: ' . $mail->ErrorInfo;
	}
?> 