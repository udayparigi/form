let popup = document.getElementById("popup");

function validateForm() {
  var fullName = document.forms["myForm"]["fullName"].value;
  var email = document.forms["myForm"]["email"].value;
  var phoneNumber = document.forms["myForm"]["phoneNumber"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirmPassword = document.forms["myForm"]["confirmPassword"].value;

  if (fullName.length < 5) {
    alert("Name must be at least 5 characters long.");
    return false;
  }
  if (email.indexOf("@") === -1) {
    alert("Enter a valid email address.");
    return false;
  }
  if (phoneNumber.length !== 10 || phoneNumber === "123456789" || isNaN(phoneNumber)) {
    alert("Enter a valid 10-digit phone number.");
    return false;
  }
  if (password.length < 8 || password === "password" || password === fullName) {
    alert("Password must be at least 8 characters long and should not be 'password' or your name.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  if (SubmitEvent) {
    alert("Your Response is submited!...")
  }
}

function verifyHuman() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) {
    alert("Please complete the reCAPTCHA verification.");
    return false; // Prevent form submission
  } else {
    alert("reCAPTCHA verification successful. Form submitted!");
    return true; // Allow form submission
  }
}

