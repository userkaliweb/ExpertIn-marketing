// Minimal Navigation Script

// Header scroll effect
window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Mobile menu toggle
document.addEventListener('click', function(e) {
  if (e.target.closest('.menu-toggle')) {
    var navMenu = document.querySelector('.nav-menu');
    var menuToggle = document.querySelector('.menu-toggle');
    if (navMenu && menuToggle) {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    }
  }
});