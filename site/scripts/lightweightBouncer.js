



var whiteList = [
	"mel",
	"melissa martinez",
	"deacon rodda",
	"betsy lamberson",
	"kelley kavanaugh",
	"sara king",
	"char campbell",
	"dave campbell",
	"michael rotan",
	"sara morely",
	"erik applegate",
	"tim pool",
	"dana landry",
	"jim harvey",
	"brendan keely",
	"julie keely"
];
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