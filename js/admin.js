// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = firebase.firestore();

// Get element in the DOM
const content = document.getElementById("feed");

// Create html with template literals
const transformObjectToString = place =>
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
	.then(posts => {
		posts.forEach(post => {
			const firestoreJson = post.data();
			const firestoreHtml = transformObjectToString(firestoreJson);
			const div = document.createElement("div");
			div.innerHTML = firestoreHtml;
			// const weatherElem = div.querySelector("#weather");
			// const currentLocation = firestoreJson.location.city;
			// fetchWeather(weatherElem, currentLocation);
			content.append(div.firstChild);
		});
	});
