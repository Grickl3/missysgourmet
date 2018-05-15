<?php

if($_POST["submit"]) {
    $recipient="deacon@sqglz.com";
    $subject="message from site";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

}

?><!DOCTYPE html>
<html>
<head>
	<title>Contact</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="keywords" content="cuisine, gourmet, fine dining, foodie">
	<meta name="description" content="">
	<link rel="stylesheet" type="text/css" href="temp/styles/styles.css">
	<!-- <meta name="pinterest" content="nopin" /> -->

	<link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,500,500i,900,900i" rel="stylesheet">


	<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:100,100i,300,300i,500,500i,700,700i" rel="stylesheet">
	
</head>
<body>
	<nav class="navigation navigation--absolute navigation--closed" id="nav"> 
		<div class="hamburger" id="hamburger">
			<div class="hamburger--top top"></div>
			<div class="hamburger--middle middle"></div>
			<div class="hamburger--bottom bottom"></div>
		</div><!-- HAMBURGER -->
		<div class="navigation__content--closed" id="nav-content">
			<ul>
				<li><a class="navigation__page-link" href="index.html">Home</a></li>
				<li><a class="navigation__page-link" href="events.html">Events</a></li>
				<li><a class="navigation__page-link" href="contact.html">Contact</a></li>
			</ul>
		</div><!-- NAVIGATION CONTENT -->
	</nav>
	<div class="wrapper__space--medium"></div>
	<div class="contact-form wrapper">
		<h1 class="wrapper__inner--medium">Contact Us.</h1>
		<p class="wrapper__inner--medium">Interested in having Missy cater your next event or in attending one of Missy's pop-up events? Drop us a line. We'll make it happen.</p>
		<div class="wrapper__space"></div>
	    <form class="contact-form__stack" method="post" action="contact.php">
	        <label class="contact-form__body">Name:</label>
	        <input class="contact-form__input" name="sender">

	        <label class="contact-form__body">Email address:</label>
	        <input class="contact-form__input" name="senderEmail">

	        <label class="contact-form__body">Message:</label>
	        <textarea class="contact-form__input" rows="5" cols="20" name="message"></textarea>

	        <input class="contact-form__button" id="contact-submit" type="submit" name="SUBMIT">
	    </form>

    </div><!-- END CONTACT FORM -->
    <div class="wrapper__space"></div>
    <div class="footer">
		<span class="footer__text footer__text--big">Follow Missy<br>on Instagram!</span>
		<a href="https://www.instagram.com/" target="_blank"><img class="footer__instagram-icon" src="assets/img/instagram-logo.svg"></a>
		<!-- Instagram icon By Bogdan Rosu -->
		
		<span class="sqglz footer__text"><a href="http://sqglz.com/" target="_blank">&#169; SQGLZ 2018</a></span>
	</div>
<script src="scripts/vanilla.js" type="text/javascript">
</script>

<script type="text/javascript">
	hamburger.addEventListener("click", toggleNav);
</script>

</body>
</html>