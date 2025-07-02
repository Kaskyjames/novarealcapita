// Testimonials carousel with auto-rotation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    testimonial.style.display = 'none';
    if (i === index) {
      testimonial.classList.add('active');
      testimonial.style.display = 'block';
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Manual controls
document.getElementById('prev-testimonial').addEventListener('click', prevTestimonial);
document.getElementById('next-testimonial').addEventListener('click', nextTestimonial);

// Auto-rotate every 7 seconds
setInterval(nextTestimonial, 7000);

// Initialize
showTestimonial(currentTestimonial);
