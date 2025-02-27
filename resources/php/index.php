<?php
// This is attached to XAMPP. Root redirected in httpd.conf file.

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['email'];
	$message = $_POST['message'];
	
	$mailto = "dogbisquit@gmail.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have recieved an e-mail from ".$name.".\n\n".$message;
	
	mail($mailto, $subject, $txt, $headers);
	header("Location: AFTER-SEND-PAGE?mailsend");
 }




/* 
Validate user input: You should validate the user's input to prevent spam and malicious activity. You can use PHP's built-in filter_var() function to validate email addresses, for example.

Use a more secure way to send emails: The mail() function is not the most secure way to send emails. You can use a library like PHPMailer or SwiftMailer to send emails more securely.

Handle errors: You should handle errors that might occur when sending the email, such as if the recipient's email address is invalid.
Redirect to a more specific page: Instead of redirecting to a generic AFTER-SEND-PAGE, you could redirect to a more specific page that confirms the email has been sent successfully.

*/