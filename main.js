console.log('JavaScript file loaded!');

// Dropdown Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
  
  // Get all dropdown toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent link from navigating
      
      const dropdown = toggle.parentElement;
      const isOpen = dropdown.classList.contains('active');
      
      // Close all other dropdowns
      document.querySelectorAll('.dropdown').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current dropdown
      if (!isOpen) {
        dropdown.classList.add('active');
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
});

// Image Carousel
const carouselImages = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');
const dots = document.querySelectorAll('.dot');
let currentImageSlide = 0;

function showImageSlide(index) {
  // Hide all images
  carouselImages.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current image
  carouselImages[index].classList.add('active');
  dots[index].classList.add('active');
}

if (prevBtn && nextBtn && carouselImages.length > 0) {
  prevBtn.addEventListener('click', () => {
    currentImageSlide = (currentImageSlide - 1 + carouselImages.length) % carouselImages.length;
    showImageSlide(currentImageSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentImageSlide = (currentImageSlide + 1) % carouselImages.length;
    showImageSlide(currentImageSlide);
  });

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentImageSlide = index;
      showImageSlide(currentImageSlide);
    });
  });
}