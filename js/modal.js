// Create and append static html for contact modal to DOM
const mdl = document.getElementById("modal");
const div = document.createElement("div");
div.innerHTML = `<div class="modal max-w-2xl bg-gray-200 text-blue-800 px-16 py-12 rounded-md">
<h2>contact</h2>
<p class="py-4">This travel blog was created by <b>Hendrik Harlichs</b> as a voluntary final project of the JavaScript for Web course from 9-25.03. at the <a target="_blank" href="https://hamburgcodingschool.com/">Hamburg Coding School</a> .</p>
<p class="py-4">Besides basic HTML and CSS techniques, various JavaScript techniques as well as Firebase services such as database and authentication and the Google Maps API are used. The tasks to be fulfilled as well as details on implementation can be found in the <a target="_blank" href="https://github.com/hendrikmitk/travel-blog/blob/master/README.md">README.md</a> on GitHub.</p>
<div class="font-light pt-2">
	<b>Hendrik Harlichs</b><br>
	Hamburg Coding School<br>
	Borselstraße 7<br>	
	22765 Hamburg
</div>
<span class="modal-close font-extrabold">X</span>
</div>`;
mdl.append(div.firstChild);

// Functionality to open and close the modal on-click
const contactBtn = document.getElementById("contact-button");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

contactBtn.addEventListener("click", function () {
	modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
	modalBg.classList.remove("bg-active");
});
