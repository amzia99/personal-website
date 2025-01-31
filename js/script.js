document.addEventListener("DOMContentLoaded", function() {
  // 🌟 Welcome Message with Fade-in Effect
  let welcomeMsg = document.createElement("p");
  welcomeMsg.textContent = "Thanks for visiting my portfolio!";
  welcomeMsg.style.opacity = "0";
  welcomeMsg.style.transition = "opacity 1.5s ease-in-out";

  let homeSection = document.getElementById("home");
  if (homeSection) {
      homeSection.appendChild(welcomeMsg);
      setTimeout(() => {
          welcomeMsg.style.opacity = "1";
      }, 500);
  }

  // 🌙 Light/Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️ Light Mode";
  }

  themeToggle.addEventListener("click", function() {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          themeToggle.textContent = "☀️ Light Mode";
          localStorage.setItem("theme", "dark");
      } else {
          themeToggle.textContent = "🌙 Dark Mode";
          localStorage.setItem("theme", "light");
      }
  });

  // 🔽 Smooth Scroll Navigation
  document.querySelectorAll("nav ul li a").forEach(anchor => {
      anchor.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  // 📱 Mobile Menu Toggle (Optional)
  const mobileMenuButton = document.getElementById("mobile-menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", function() {
          navMenu.classList.toggle("active");
      });
  }
});