const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const gender = document.getElementById("gender").value;

// Validation
if (!name || !email || !password || !confirmPassword || !gender) {
    alert("All fields are required!");
    return;
}

if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
}

alert("Registration successful!");


