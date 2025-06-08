// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('i');
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}

document.addEventListener('DOMContentLoaded', initSmoothScroll);
