// Particles.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded');
});

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 5000);
showTestimonial(currentTestimonial);