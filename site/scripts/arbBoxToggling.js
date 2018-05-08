function checkConnection() {
	console.log("js connected.");
}


		
var toggles =[];
var headers = [];
var boxes = [];
var lids = [];

var buildSomeBoxes = function(frmTop) {
	var toggles = document.querySelectorAll(".toggle");

	for(i=0; i<toggles.length; i++) {
		var tog = toggles[i];
		//chev.addEventListener("click", operateLid);
		tog.id = "tog" + [i];
	}

	var headers = [];

	for (i=0; i<toggles.length; i++) {
		var header = toggles[i].parentNode;
		headers.push(header);
	}

	var boxes = [];

	for (i=0; i<headers.length; i++) {
		var box = headers[i].parentNode;
		boxes.push(box);
	}

	var lids = [];

	for (i=0; i<boxes.length; i++) {
		var lid = boxes[i].childNodes[frmTop];
		lid.id = "lid" + [i];
		lids.push(lid);
	} 

	console.log(toggles,lids); 

	//define lid openning and closing
	var operateLid = function(e) {
		this.classList.toggle("toggle--closed");
		this.classList.toggle("toggle--open");
		var tog = this.id;
		var togNum = tog.slice(-1);
		var lidName = "lid" + togNum;
		var lid = document.getElementById(lidName);
		lid.classList.toggle("box--closed");
		lid.classList.toggle("box--open");
		console.log(lid);
	}

	// add event listener
	for (i=0; i<toggles.length; i++) {
		toggles[i].addEventListener("click", operateLid);
	}
}

	