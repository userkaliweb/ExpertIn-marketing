// Basic popup functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  var overlay = document.getElementById('exitPopupOverlay');
  var popup = document.getElementById('exitPopup');
  var closeBtn = popup ? popup.querySelector('.popup-close') : null;
  var form = document.getElementById('popupForm');
  
  // Show popup function
  function showPopup() {
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('visible');
      if (popup) popup.classList.add('visible');
    }
  }
  
  // Hide popup function
  function hidePopup() {
    if (overlay) {
      overlay.classList.remove('visible');
      if (popup) popup.classList.remove('visible');
      setTimeout(function() {
        overlay.style.display = 'none';
      }, 300);
    }
  }
  
  // Add event listeners
  if (closeBtn) {
    closeBtn.addEventListener('click', hidePopup);
  }
  
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) hidePopup();
    });
  }
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      hidePopup();
      alert('Thank you! Check your email for the guide.');
    });
  }
  
  // Show popup after 30 seconds
  setTimeout(function() {
    showPopup();
  }, 30000);
});
