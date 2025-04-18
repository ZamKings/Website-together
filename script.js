// Simple client-side login logic with hardcoded credentials
const validUsername = "nizam";
const validPassword = "nizamgg123";

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value.trim();

        if (username === validUsername && password === validPassword) {
          sessionStorage.setItem("loggedInUser", username);
          // Add fade out animation on login page before redirect
          const loginContainer = document.querySelector('.login-container');
          if (loginContainer) {
            loginContainer.style.transition = 'opacity 0.5s ease';
            loginContainer.style.opacity = '0';
            setTimeout(() => {
              window.location.href = "dashboard.html";
            }, 500);
          } else {
            window.location.href = "dashboard.html";
          }
        } else {
          errorMsg.textContent = "Invalid username or password.";
        }
    });
  }

  if (window.location.pathname.endsWith("dashboard.html")) {
    const userDisplay = document.getElementById("userDisplay");
    const logoutBtn = document.getElementById("logoutBtn");

    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      // Not logged in, redirect to login page
      window.location.href = "index.html";
    } else {
      userDisplay.textContent = loggedInUser;
    }

    logoutBtn.addEventListener("click", () => {
      // Add fade out animation before logout
      const dashboardContainer = document.querySelector('.dashboard-container');
      if (dashboardContainer) {
        dashboardContainer.style.transition = 'opacity 0.5s ease';
        dashboardContainer.style.opacity = '0';
        setTimeout(() => {
          sessionStorage.removeItem("loggedInUser");
          window.location.href = "index.html";
        }, 500);
      } else {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
      }
    });
  }
});
