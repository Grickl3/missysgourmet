 
var chimpSwitch = document.getElementById('chimp-switch');
var chimpModal = document.getElementById('chimp-modal');
var modalClose = document.getElementById('modal-close');
var modalBackdrop = document.getElementById('modal-backdrop');

function openChimp() {
	chimpModal.classList.remove("static-chimp__modal--hidden")
	modalBackdrop.classList.remove("static-chimp__modal--hidden")
	console.log("switch open");
}

function closeChimp() {
	chimpModal.classList.add("static-chimp__modal--hidden")
	modalBackdrop.classList.add("static-chimp__modal--hidden")
	console.log("switch close");
}

chimpSwitch.addEventListener("click", openChimp);
modalClose.addEventListener("click", closeChimp);