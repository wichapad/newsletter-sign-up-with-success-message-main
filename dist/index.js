"use strict";
const emailInput = document.getElementById("email");
const emailError = document.getElementById("error-message");
const subscript = document.getElementById("bg-subcript-content");
const mainContent = document.getElementById("bg-content");
const emailRes = document.getElementById("email-res");
function subscribe(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailInput.value);
    if (isValidEmail) {
        mainContent.style.display = "none";
        subscript.style.display = "flex";
        emailRes.textContent = emailInput.value;
    }
    else {
        emailError.textContent = "Invalid email required";
        emailInput.style.border = "1px solid orangered";
        emailInput.style.color = "orangered";
    }
}
function dismiss(event) {
    event.preventDefault();
    if (subscript) {
        subscript.style.display = "none";
        mainContent.style.display = "flex";
    }
}
