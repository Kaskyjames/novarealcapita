// Toggle Investment Plan Details
function togglePlan(card) {
  const details = card.querySelector(".plan-details");
  const allCards = document.querySelectorAll(".plan-card");
  allCards.forEach((c) => {
    if (c !== card) c.classList.remove("active");
    c.querySelector(".plan-details").style.maxHeight = null;
  });

  if (card.classList.contains("active")) {
    card.classList.remove("active");
    details.style.maxHeight = null;
  } else {
    card.classList.add("active");
    details.style.maxHeight = details.scrollHeight + "px";
  }
}

// Lightbox Viewer
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("click", function (e) {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

// Testimonial Slider
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

prevBtn?.addEventListener("click", () => {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
});

nextBtn?.addEventListener("click", () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showTestimonial(testimonialIndex);

  // Animate on scroll using IntersectionObserver
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  fadeElements.forEach((el) => observer.observe(el));
});
