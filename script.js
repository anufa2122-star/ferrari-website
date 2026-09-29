const form = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const bookButton = document.getElementById("bookButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const successMessage = document.getElementById("successMessage");

nameInput.addEventListener("input", function() {

    if (nameInput.value === "") {
        welcomeMessage.textContent = "";
    } else {
        welcomeMessage.textContent = "Welcome, " + nameInput.value + "!";
    }

});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (nameInput.value === "") {
        alert("Please enter your name");
    }

    else if (emailInput.value === "") {
        alert("Please enter your email");
    }

    else if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email");
    }

    else if (phoneInput.value === "") {
        alert("Please enter your phone number");
    }

    else if (phoneInput.value.length !== 10) {
        alert("Please enter a 10-digit phone number");
    }

   
   else {
    successMessage.textContent = "Booking submitted successfully!";
    form.reset();
}
   
   

});