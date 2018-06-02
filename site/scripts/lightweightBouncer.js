



var whiteList = ["melissa martinez","deacon rodda","2chefmelissa@gmail.com","1uppity1@gmail.com","betsy lamberson","mel", "kelley kavanaugh", "sara king", "brendan keely", "julie keely"];
var $bouncer = $("#bouncer");
var $bouncerCopy = $("#bouncer-copy");
var $nameSubmission;
var $bouncerGoverned = $("#bouncer-governed");
var $bouncerForm = $(".bouncer__form-box");

$bouncer.on("submit", function(e) {
	e.preventDefault();
	nameSubmission = $("#bouncer").find('[type=text]').val();
	// nameSubmission = $nameSubmission.val
	console.log(nameSubmission);
	var attempt = nameSubmission.toLowerCase();
	console.log(attempt);
	for (var i = 0; i < whiteList.length; i++) {
		if(attempt===whiteList[i]) {
			// attempt = $("#bouncer").find('[type=text]').val("yep.");
			$bouncerGoverned.removeClass("bouncer-governed--blurred");
			$bouncerForm.addClass("bouncer__form-box--hidden");
			return;
		} else {
			$bouncerCopy.text("Sorry, you aren't on the list.");
		}
	}
});