// Initialize variables
let attempts = 0;
const maxAttempts = 3;
const correctEmail = "example@gmail.com";
const correctPassword = "password123";

function verifyLogin() {
  // Get user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    // Missing email or password
    alert("Please fill in all sections.");
  } else if (email === correctEmail && password === correctPassword) {
    // Successful login
    alert("Login successful!");
  } else {
    // Incorrect login details
    attempts++;
    if (attempts < maxAttempts) {
      alert("Login failed. Please try again.");
      clearInputs();
    } else {
      // Account locked
      alert("Account locked. Please contact support.");
      lockAccount();
    }
  }
}

function clearInputs() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function lockAccount() {
  // Disable login inputs
  document.getElementById("email").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
}
