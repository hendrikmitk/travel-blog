// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the currently signed-in user
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// User is signed in
		console.log("Welcome friend :)");
		document.getElementById("adminButton").classList.remove("invisible");
		document.getElementById("author-profile").classList.remove("invisible");
	} else {
		// No user is signed in
		console.log("Nobody signed in :(");
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

// Create info window html with template literals
const createString = (place) =>
	`<div class="my-4 ml-4 mr-3">
	<div class="mx-auto max-w-sm rounded-lg overflow-hidden justify-center bg-gray-200 border-2 border-blue-800">
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
	</div>
	</div>`;

// Global arrays for info windows and markers
const infoWindows = [];
const markers = [];

let map;

// Initialize map
function initMap() {
	const center = { lat: 42.41, lng: 11.83 };
	map = new google.maps.Map(document.getElementById("map"), {
		center: center,
		zoom: 5,
		disableDefaultUI: true,
	});

	// Iterate through the Firestore database
	db.collection("posts")
		.get()
		.then((posts) => {
			posts.forEach((post) => {
				const placeInfo = createString(post.data());
				let infowindow = new google.maps.InfoWindow({
					content: placeInfo,
				});
				const marker = new google.maps.Marker({ position: post.data().location.coordinates, map: map });
				marker.addListener("click", () => {
					closeInfoWindows();
					infowindow.open(map, marker);
				});
				infoWindows.push(infowindow);
				markers.push(marker);
			});
		});
}

// Close all open infoWindows
const closeInfoWindows = () => {
	for (let i = 0; i < infoWindows.length; i++) {
		const infoWindow = infoWindows[i];
		infoWindow.close();
	}
};

// Login button function and click handler
const loginHandler = (e) => {
	e.preventDefault();
	window.location.href = "login.html";
};

document.getElementById("loginButton").addEventListener("click", loginHandler);

// Admin button function and click handler
const adminHandler = (e) => {
	e.preventDefault();
	window.location.href = "admin.html";
};

document.getElementById("adminButton").addEventListener("click", adminHandler);
