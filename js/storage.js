// Get reference to storage service
const storage = firebase.storage();

// Iterate through Firestore database
db.collection("posts") // db is defined in main.js
	.get()
	.then((posts) => {
		posts.forEach((post) => {
			// Get image path from db
			const imagePath = post.data().image.src;

			// Create reference file to download
			const imgRef = storage.ref().child(`${imagePath}`); // Luckily image src in db matches storage bucket path

			// Get download URL
			imgRef
				.getDownloadURL()
				.then(function (url) {
					// console.log("File name:", imgRef.name);
					// console.log("Storage image url:", url);
				})
				.catch(function (error) {
					switch (error.code) {
						case "storage/object-not-found":
							// File doesn't exist
							break;
						case "storage/unauthorized":
							// User doesn't have permission to access the object
							break;
						case "storage/canceled":
							// User canceled the upload
							break;
						case "storage/unknown":
							// Unknown error occurred, inspect the server response
							break;
					}
				});
		});
	});
