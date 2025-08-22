// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();

// Typing Effect
const text = ["Web Developer", "Web Designer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  document.querySelector(".typing").textContent =
    current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(type, 1000);
  }
}
type();

// Demo form submission
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting me! (Demo only)");
});

// Scroll Animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
