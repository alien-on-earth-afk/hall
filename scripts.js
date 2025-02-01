// Background Slideshow and Text Animation
const images = [
  'background/image1.jpg',
  'background/image2.jpg',
  'background/image3.jpg',
  'background/image4.jpg',
  'background/image5.jpg',
  'background/image6.jpg'
];

let currentImageIndex = 0;
const backgroundSlideshow = document.getElementById('background-slideshow');
const welcomeText = document.querySelector('.welcome-text');
const hallName = document.querySelector('.hall-name');

// Create initial images
images.forEach((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'background-image';
  img.style.opacity = index === 0 ? '1' : '0';
  backgroundSlideshow.appendChild(img);
});

function animateText() {
  // Reset animations
  welcomeText.style.opacity = '0';
  hallName.style.opacity = '0';
  welcomeText.style.transform = 'translateY(-20px)';
  hallName.style.transform = 'translateY(20px)';

  // Animate welcome text
  setTimeout(() => {
    welcomeText.style.transition = 'all 0.6s ease';
    welcomeText.style.opacity = '1';
    welcomeText.style.transform = 'translateY(0)';
  }, 500);

  // Animate hall name
  setTimeout(() => {
    hallName.style.transition = 'all 0.6s ease';
    hallName.style.opacity = '1';
    hallName.style.transform = 'translateY(0)';
  }, 800);
}

function changeBackground() {
  const images = backgroundSlideshow.getElementsByClassName('background-image');
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  
  images[currentImageIndex].style.opacity = '0';
  images[nextImageIndex].style.opacity = '1';
  
  currentImageIndex = nextImageIndex;
  animateText();
}

// Initial animation
animateText();

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Particles.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded');
});

// Side Menu Toggle
function toggleMenu() {
  document.getElementById('side-menu').classList.toggle('active');
}

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