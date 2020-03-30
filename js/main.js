// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = firebase.firestore();

// Create info window html with template literals
const createString = place =>
	`<div class="m-10">
	<div class="mx-auto max-w-sm rounded-lg overflow-hidden justify-center bg-gray-200">
	<img class="w-full" src="${place.image ? place.image.src : ""}" alt="${place.image ? place.image.alt : ""}">
	<div class="px-6 py-4">
	<h2 class="font-bold text-xl mb-2">${place.title}</h2>
	<p class="text-gray-700 text-base">${place.text}</p>
	</div>
	<div class="px-6 flex items-center">
	<img class="w-10 h-10 rounded-full mr-4" src="${place.author_image_src}" alt="${place.author_image_alt}">
	<div class="text-sm">
	<p class="text-gray-900 leading-none">${place.author}</p>
	<p class="text-gray-600">${place.date.toDate ? place.date.toDate().toDateString() : place.date}</p>
	</div>
	</div>
	<p class="px-6 py-3 text-gray-600 text-s font-light"><b>Location:</b> ${place.location.city}, ${place.location.country}</p>
	</div>
	</div>`;

// Global arrays for info windows and markers
const infoWindows = [];
const markers = [];

let map;

// Initialize map
function initMap() {
	const center = { lat: 40.504776, lng: 10.627462 };
	map = new google.maps.Map(document.getElementById("map"), {
		center: center,
		zoom: 6,
		disableDefaultUI: true,
	});

	// Iterate through the Firestore database
	db.collection("posts")
		.get()
		.then(posts => {
			posts.forEach(post => {
				// console.log(`${post.id} => ${JSON.stringify(post.data())}`);
				// console.log(`This post is written by: ${post.data().author}`);
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
