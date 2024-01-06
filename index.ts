const emailInput = document.getElementById("email")! as HTMLInputElement;
const emailError = document.getElementById("error-message") as HTMLElement;
const subscript = document.getElementById("bg-subcript-content") as HTMLElement;
const mainContent = document.getElementById("bg-content") as HTMLElement;
const emailRes = document.getElementById("email-res") as HTMLElement;

function subscribe(event: Event) {
  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(emailInput.value);

  if (isValidEmail) {
    mainContent.style.display = "none";
    subscript.style.display = "flex";
    emailRes.textContent =emailInput.value;
  } else {
    emailError.textContent = "Invalid email required";
    emailInput.style.border = "1px solid orangered";
    emailInput.style.color = "orangered";
  }
}

function dismiss(event: Event) {
  event.preventDefault();
  if (subscript) {
    subscript.style.display = "none";
    mainContent.style.display = "flex";
  }
}
