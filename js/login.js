// Check auth status and adapt site accordingly
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// User is signed in
		window.location.href = "index.html"; // Go to index.html
	} else {
		// No user is signed in
	}
});

// Toggle password visibility
const showPassword = () => {
	const pwdInput = document.getElementById("password");
	pwdInput.type === "password" ? (pwdInput.type = "text") : (pwdInput.type = "password");
};

// Login function and click handler
const login = (e) => {
	e.preventDefault(); // Prevent page reload on-click
	const email = document.getElementById("email").value; // Get emailadress
	console.log(email);
	const pwd = document.getElementById("password").value; // Get pwd
	console.log(pwd);
	firebase
		.auth()
		.signInWithEmailAndPassword(email, pwd)
		.then(() => {
			console.log("Success!");
			window.location.href = "index.html";
		})
		.catch((error) => {
			// Handle errors here
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			console.log("Login failed!");
			document.getElementById("failmsg").className = "flex justify-center text-red-500 text-small italic mt-2 visible";
		});
};

document.getElementById("login-form").addEventListener("submit", login);

// Back button function and click handler
const backHandler = (e) => {
	e.preventDefault(); // Prevent page reload on-click
	window.location.href = "index.html"; // Go to index.html
};

document.getElementById("back-button").addEventListener("click", backHandler);
