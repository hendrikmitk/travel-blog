// Get reference to storage service
const storage = firebase.storage();

// Create child references
const dirRef = storageRef.child("img");
const imgRef = storageRef.child("img/fisherman.jpg");
