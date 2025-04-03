// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// GSAP Timeline for the Hero Section
gsap.timeline({ defaults: { ease: "power3.out" } })
  .from("#hero-title", { duration: 1.5, y: -50, opacity: 0 })
  .from(".tagline", { duration: 1.5, y: 50, opacity: 0 }, "-=1")
  .from(".btn", { duration: 1, scale: 0.8, opacity: 0, ease: "back.out(1.7)" }, "-=0.5");

// Advanced ScrollTrigger Animations for each section
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section, header").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '.about-text',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  x: -50,
  duration: 1,
  onComplete: () => {
    document.querySelector('.about-text').style.opacity = 1; // Ensure visibility after animation
  },
});

gsap.from('.profile-wrapper', {
  scrollTrigger: {
    trigger: '.profile-wrapper',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  x: 50,
  duration: 1,
  onComplete: () => {
    document.querySelector('.profile-wrapper').style.opacity = 1; // Ensure visibility after animation
  },
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    targetEl.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form Submission Simulation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  this.reset();
});

// Initialize ParticlesJS for My Work Section
particlesJS('particles-js', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
    },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Initialize VanillaTilt for Project Cards
VanillaTilt.init(document.querySelectorAll('.project-card'), {
  max: 15, // Maximum tilt angle
  speed: 400, // Speed of the tilt effect
  glare: true, // Enable glare effect
  'max-glare': 0.5, // Maximum glare opacity
});

// Initialize ParticlesJS for Certifications Section
particlesJS('particles-certifications', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
    },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Initialize VanillaTilt for Certification Cards
VanillaTilt.init(document.querySelectorAll('.certification-card'), {
  max: 15, // Maximum tilt angle
  speed: 400, // Speed of the tilt effect
  glare: true, // Enable glare effect
  'max-glare': 0.5, // Maximum glare opacity
});

