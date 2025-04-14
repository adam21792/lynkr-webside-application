document.getElementById("getStarted").addEventListener("click", () => {
  alert("Welcome to Lynkr! Let’s start connecting.");
  // Later: redirect to login/signup or dashboard
});

$(document).ready(() => {
  // Toggle Navbar for mobile view
  $('.nav-toggle').click(() => {
      $('.nav-links').toggleClass("active");
  });

  // Handle logout action
  $("#logout").click(() => {
      $("#dashboard").hide();
      $(".form-container").fadeIn();
  });
});

const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    gender: document.getElementById("gender").value,  // Dropdown value
    orientation: document.getElementById("orientation").value,  // Dropdown value
 };
 
  try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (res.ok) {
          message.innerText = "✅ " + data.msg;
          registerForm.reset();
      } else {
          message.innerText = "❌ " + (data.msg || "Registration failed");
      }
  } catch (err) {
      console.error(err);
      message.innerText = "❌ Error connecting to server";
  }
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(step) {
  currentSlide += step;
  if (currentSlide >= totalSlides) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  updateSlider();
}

function updateSlider() {
  const slideContainer = document.querySelector('.slide-container');
  slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Initialize the first slide
updateSlider();
document.getElementById("sidebarToggle").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("collapsed");
  });
  // Toggle sidebar on mobile
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("sidebarToggle");
  
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  });
  