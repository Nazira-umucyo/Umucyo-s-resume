document.addEventListener("DOMContentLoaded", () => {
	  // Contact form validation and submission handling
	//   const form = document.querySelector('form');
	//
	//     form.addEventListener('submit', (e) => {
	//         e.preventDefault();
	//
	//             const name = form.elements["name"].value.trim();
	//                 const email = form.elements["email"].value.trim();
	//                     const message = form.elements["message"].value.trim();
	//
	//                         if (!name || !email || !message) {
	//                               alert("Please fill in all fields.");
	//                                     return;
	//                                         }
	//
	//                                             // Basic email validation pattern
	//                                                 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	//                                                     if (!emailPattern.test(email)) {
	//                                                           alert("Please enter a valid email address.");
	//                                                                 return;
	//                                                                     }
	//
	//                                                                         // If validation passes, submit the form data to Formspree
	//                                                                             fetch(form.action, {
	//                                                                                   method: 'POST',
	//                                                                                         body: new FormData(form),
	//                                                                                               headers: { 'Accept': 'application/json' }
	//                                                                                                   }).then(response => {
	//                                                                                                         if (response.ok) {
	//                                                                                                                 alert('Thanks for your message! I will get back to you soon.');
	//                                                                                                                         form.reset();
	//                                                                                                                               } else {
	//                                                                                                                                       alert('Oops! There was a problem submitting your form.');
	//                                                                                                                                             }
	//                                                                                                                                                 }).catch(() => {
	//                                                                                                                                                       alert('Oops! There was a problem submitting your form.');
	//                                                                                                                                                           });
	//                                                                                                                                                             });
	//
	//                                                                                                                                                               // Hamburger menu toggle for mobile nav
	//                                                                                                                                                                 const menuToggle = document.getElementById("menu-toggle");
	//                                                                                                                                                                   const navLinks = document.getElementById("nav-links");
	//
	//                                                                                                                                                                     menuToggle.addEventListener("click", () => {
	//                                                                                                                                                                         navLinks.classList.toggle("show");
	//                                                                                                                                                                           });
	//                                                                                                                                                                           });
	//
