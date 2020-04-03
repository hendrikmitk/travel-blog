// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Toggle password visibility
const showPassword = () => {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
};

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
			window.location.href = "admin.html"; // Go to admin.html
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

document.getElementById("loginForm").addEventListener("submit", login);
