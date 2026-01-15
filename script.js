// Function to toggle highlight on sections
function toggleHighlight(event) {
  event.target.classList.toggle("highlight");
}

// Add click event listeners to all sections
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.addEventListener("click", toggleHighlight);
});

// Handle form submission
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const message = document.querySelector("#form-message");

  message.textContent = `Thanks for your message, ${nameInput.value}!`;
  message.style.display = "block";

  form.reset();
});
