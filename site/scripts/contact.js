// console.log("contact.js connected.");


$(document).ready(function () {
	$('.submit').click(function (event) {
		// event.preventDefault();
		console.log("button clicked");

		var email = $('.email').val();
		var subject = $('.subject').val();
		var message = $('.message').val();
		var statusElm = $('.status');
		statusElm.empty();

		if(email.length > 5 && email.includes('@') && email.includes('.')) {
			// statusElm.append('<div>email is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>email is invalid</div>');
		}

		if(subject.length > 2) {
			// statusElm.append('<div>subject is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>subject is invalid<br>min. 3 characters</div>');
		}

		if(message.length > 20) {
			// statusElm.append('<div>message is valid</div>');
		} else {
			event.preventDefault();
			statusElm.append('<div>message is invalid<br>min. 20 characters</div>');
		}
	});
})