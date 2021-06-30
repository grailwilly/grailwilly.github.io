document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').toLowerCase() === location.pathname.toLowerCase()) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  })
})