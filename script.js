document.addEventListener("DOMContentLoaded", () => {
  // Contact form validation and submission handling
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload on submit

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your message was sent.");
    form.reset();
  });

  // Hamburger menu toggle for mobile nav
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
