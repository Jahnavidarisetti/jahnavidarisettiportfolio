// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu when clicking a link
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));

// Active nav highlight
const sections = document.querySelectorAll("section, header");
const navAnchors = document.querySelectorAll(".nav-links a");

const ioNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute("id");
    navAnchors.forEach(a => a.classList.remove("active"));
    const active = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (active) active.classList.add("active");
  });
}, { threshold: 0.35 });

sections.forEach(s => {
  if (s.id) ioNav.observe(s);
});
