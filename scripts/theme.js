const themeToggleButton = document.querySelector("#theme-toggle");

function updateThemeButtonText() {
  if (document.body.classList.contains("dark")) {
    themeToggleButton.textContent = "🌙 Switch to Light Mode";
  } else {
    themeToggleButton.textContent = "☀️ Switch to Dark Mode";
  }
}

themeToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateThemeButtonText();
});

updateThemeButtonText();
