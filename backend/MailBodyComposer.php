<?php
	include "conf.php";
	foreach (glob("lib/phpmailer/*.php") as $filename)
	{
	    include $filename;
    }
    
    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

    class MailBodyComposer{
        public static function getMail(){
            switch($_POST["emailType"]){
                case "callOrder":
                    $bodyText = MailBodyComposer::getCallOrderBody();
                    $subject = MailBodyComposer::getCallOrderSubject();
                    break;
                case "getPrice":
                    $bodyText = MailBodyComposer::getGetPriceBody();
                    $subject = MailBodyComposer::getGetPriceSubject();
                    break;
                case "quickOrder":
                    $bodyText = MailBodyComposer::getQuickOrderBody();
                    $subject = MailBodyComposer::getQuickOrderSubject();
                    break;
                case "question":
                    $bodyText = MailBodyComposer::getQuestionBody();
                    $subject = MailBodyComposer::getQuestionSubject();
                    break;
            }
            
            $mail = new PHPMailer(true);

            $mail->IsSMTP();
            $mail->CharSet = 'UTF-8';
    
            $mail->Host       = "smtp.gmail.com"; // SMTP server example
            $mail->SMTPSecure = "tls";
            $mail->SMTPDebug = 4;
            $mail->SMTPAuth   = true;                  // enable SMTP authentication
            $mail->Port       = Configuration::$MAIL_PORT;                    // set the SMTP port for the GMAIL server
            $mail->Username   = Configuration::$MAIL_USER_NAME; // SMTP account username example
            $mail->Password   = Configuration::$MAIL_USER_PASSWORD;    
    
            $mail->setFrom(Configuration::$MAIL_USER_NAME, 'dostavka24.pl');
            $mail->addAddress(Configuration::$ADMIN_MAIL_ADDRESS, 'Site owner'); 
            
            $mail->IsHTML(true);
            $mail->Body    = $bodyText;
            $mail->Subject = $subject; 

            return $mail;
        }

        private static function getCallOrderBody(){
            $body = "Заказ звонка <br/>
            Имя: ".$_POST["customerName"]."<br>
            Номер телефона: ".$_POST["phoneNumber"];

            return $body;
        }

        private static function getCallOrderSubject(){
            return "Заказ звонка";
        }

        private static function getGetPriceBody(){
            $body = "Узнать цену<br/>
            Номер телефона: ".$_POST["phoneNumber"]."<br>
            Товар:<br>".
            $_POST["productTitle"];

            return $body;
        }

        private static function getGetPriceSubject(){
            return "Узнать цену";
        }

        private static function getQuickOrderBody(){
            $description=preg_replace( "/\r|\n/", "<br>", $_POST["productDescription"] );
            $body = "Быстрый заказ<br/>
            Ссылка на страницу товара: <a href=\"".$_POST["productUrl"]."\">".$_POST["productUrl"]."</a><br>
            Описание товара:<br>".
            $description."<br>
            Номер телефона: ".$_POST["phoneNumber"]."<br>
            Email: ".$_POST["email"];

            return $body;
        }

        private static function getQuickOrderSubject(){
            return "Быстрый заказ";
        }

        private static function getQuestionBody(){
            $body = "Вопрос от пользователя<br/>
            Номер телефона: ".$_POST["phoneNumber"]."<br>
            Вопрос: ".$_POST["question"];

            return $body;
        }

        private static function getQuestionSubject(){
            return "Вопрос от пользователя";
        }
    }
?>