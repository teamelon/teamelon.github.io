var hamburger = document.querySelector(".icon");
hamburger.addEventListener("click", function() {
	document.querySelector(".page_header").classList.toggle("nav_opened");
	document.querySelector(".icon").classList.toggle("active");
}, false);






