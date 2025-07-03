// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Investment Plans Toggle
function togglePlan(card) {
  card.classList.toggle("active");
}

// Testimonials
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

document.getElementById("nextTestimonial").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

document.getElementById("prevTestimonial").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

showTestimonial(current);
