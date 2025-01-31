document.addEventListener("DOMContentLoaded", function() {
  let welcomeMsg = document.createElement("p");
  welcomeMsg.textContent = "Thanks for visiting my portfolio!";
  document.getElementById("home").appendChild(welcomeMsg);
});

document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check local storage for saved theme
  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️ Light Mode";
  }

  themeToggle.addEventListener("click", function() {
      body.classList.toggle("dark-mode");

      // Update button text
      if (body.classList.contains("dark-mode")) {
          themeToggle.textContent = "☀️ Light Mode";
          localStorage.setItem("theme", "dark");
      } else {
          themeToggle.textContent = "🌙 Dark Mode";
          localStorage.setItem("theme", "light");
      }
  });
});
