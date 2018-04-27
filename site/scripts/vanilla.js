var hamburger = document.getElementById("hamburger");
var navContent = document.getElementById("nav-content");
var nav = document.getElementById("nav");

function toggleNav(e) {
	console.log("nav-toggled");
	navContent.classList.toggle("navigation__content--closed");
	navContent.classList.toggle("navigation__content--open");
	nav.classList.toggle("navigation--open");
	nav.classList.toggle("navigation--closed");
	hamburger.classList.toggle("hamburger--closed");
}

