// Investment Plan Toggle
function togglePlan(card) {
  card.classList.toggle('active');
}

// Testimonial Carousel Logic
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

// Navigation Buttons
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}

// Show first testimonial by default
showTestimonial(currentTestimonial);

// Project Lightbox Preview
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox when clicking outside image
document.addEventListener('click', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// ScrollReveal Animations (optional, requires ScrollReveal.js CDN)
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('.fade-in', {
    duration: 1000,
    distance: '30px',
    origin: 'bottom',
    easing: 'ease-in-out',
    interval: 100
  });
}
