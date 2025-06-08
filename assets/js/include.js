function loadFragment(elementId, url = 'node_modules/common.html') {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const target = document.getElementById(elementId);
      if (target) {
        target.innerHTML = html;
      }
    })
    .catch(err => {
      console.error('Error loading fragment:', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadFragment('header');
  loadFragment('footer');
});
