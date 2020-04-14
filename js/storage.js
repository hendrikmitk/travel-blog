// Get reference to storage service
const storage = firebase.storage();

// Create reference file to download
const fishRef = storage.ref().child("img/fisherman.jpg"); // static image

// Get the download URL
fishRef
	.getDownloadURL()
	.then(function (url) {
		console.log(url);
		console.log(fishRef.name);
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
