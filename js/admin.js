// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check auth status and adapt site accordingly
const loginLogoutButton = document.getElementById("login-logout-button");
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// User is signed in
		// document.getElementById("author-profile").classList.remove("invisible");
		document.getElementById("back-button").classList.remove("invisible");
		const div = document.createElement("div");
		div.innerHTML = `<button id="logout-button" class="active-button bg-blue-800 text-gray-200 shadow">Logout</button>`;
		loginLogoutButton.append(div.firstChild);
		const logoutHandler = (e) => {
			e.preventDefault(); // Prevent page reload on-click
			window.location.href = "index.html"; // Go to index.html
			logout();
		};
		document.getElementById("logout-button").addEventListener("click", logoutHandler);
	} else {
		// No user is signed in
		window.location.href = "login.html";
	}
});

// Basic logout function
const logout = () => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			console.log("Logout successful");
		})
		.catch(function (error) {
			// Error handling
		});
};

// Initialize Cloud Firestore
const db = firebase.firestore();

// Get element in the DOM
const content = document.getElementById("feed");

// Create post html with template literals
const createStringPost = (place) =>
	`<div class="mx-auto max-w-sm rounded-lg overflow-hidden justify-center shadow-lg bg-gray-200 border-2 border-blue-800 mb-20">
	<img class="w-full" src="${place.image ? place.image.src : ""}" alt="${place.image ? place.image.alt : ""}">
	<div class="px-6 py-4">
	<h2 class="font-bold text-xl text-blue-800 mb-2">${place.title}</h2>
	<p class="text-gray-700 text-base">${place.text}</p>
	</div>
	<div class="px-6 flex items-center">
	<img class="w-10 h-10 rounded-full mr-4" src="${place.author_image_src}" alt="${place.author_image_alt}">
	<div class="text-sm">
	<p class="text-gray-900 leading-none">${place.author}</p>
	<p class="text-gray-600">${place.date.toDate ? place.date.toDate().toDateString() : place.date}</p>
	</div>
	</div>
	<p class="px-6 pt-3 pb-6 text-gray-600 text-s font-light"><b>Location:</b> ${place.location.city}, ${place.location.country}</p>
	</div>`;

// Iterate through the Firestore database
db.collection("posts")
	.get()
	.then((posts) => {
		posts.forEach((post) => {
			const firestoreJson = post.data();
			const firestoreHtml = createStringPost(firestoreJson);
			const div = document.createElement("div");
			div.innerHTML = firestoreHtml;
			content.append(div.firstChild);
		});
	});

// Create new blog post
const createNewBlogPost = (e) => {
	e.preventDefault();

	// Get values from form
	const newPostTitle = document.getElementById("grid-title").value;
	const newPostText = document.getElementById("grid-text").value;
	const newPostCity = document.getElementById("grid-city").value;
	const newPostCountry = document.getElementById("grid-country").value;
	const newPostDate = new Date();

	// Send to Firestore
	db.collection("posts")
		.add({
			title: newPostTitle,
			text: newPostText,
			location: {
				city: newPostCity,
				country: newPostCountry,
				coordinates: {
					lat: 35.03,
					lng: 17.82,
				},
			},
			date: newPostDate,
			author: "Hendrik Harlichs",
			author_image_src: "img/hein_bloed_2.png",
			author_image_alt: "Avatar of Hein Blöd",
			image: {
				alt: "Placeholder image",
				src: "img/placeholder.jpg",
			},
		})
		.then((docRef) => {
			console.log("Blog post created with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
};

document.getElementById("newPostForm").addEventListener("submit", createNewBlogPost);

// Display and colorize character amount of textarea input
const checkInputContinuously = () => {
	const chars = document.getElementById("grid-text").value.length;
	document.getElementById("input-length").innerHTML = chars;
	const c = document.getElementById("input-length");
	if (chars >= 1 && chars <= 120) {
		c.style.color = "#718096";
		document.getElementById("grid-button").classList.replace("inactive-button", "active-button");
	} else if (chars > 120) {
		c.style.color = "#ff0000";
		document.getElementById("grid-button").classList.replace("active-button", "inactive-button");
	} else {
		c.style.color = "#718096";
		document.getElementById("grid-button").classList.replace("active-button", "inactive-button");
	}
};

// Back button functions and eventListener
const backHandler = (e) => {
	e.preventDefault(); // Prevent page reload on-click
	window.location.href = "index.html"; // Go to index.html
};

document.getElementById("back-button").addEventListener("click", backHandler);
