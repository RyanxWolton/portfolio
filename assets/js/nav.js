document.addEventListener("DOMContentLoaded", () => { 

  const navToggle = document.getElementById('navToggle');
  const navCheck = navToggle.getElementsByTagName('input')[0];

  // Scroll to enquiry form on contact click
  document.getElementById('contactNav').addEventListener("click", event => {
    document.getElementById('contactForm').scrollIntoView({
      behavior: 'smooth'
    })
    navCheck.checked = false;
  });

  // Listen for clicks outside of nav menu and close if needed
  document.addEventListener('click', event => {
    if (!navToggle.contains(event.target)) {
      navCheck.checked = false;
    };
  });
});