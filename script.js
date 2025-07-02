// Smooth Scroll Navigation
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Investment Plan Toggle
function togglePlan(card) {
  card.classList.toggle('active');
}

// Project Lightbox Functions
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) {
      t.classList.add('active');
    }
  });
}

document.getElementById('prevTestimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById('nextTestimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Optional ScrollReveal animations (if you load ScrollReveal.js)
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('.service-card', {
    duration: 800,
    distance: '40px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100
  });
  ScrollReveal().reveal('.plan-card', {
    duration: 800,
    distance: '40px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100
  });
  ScrollReveal().reveal('.project-card', {
    duration: 800,
    distance: '40px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100
  });
}
