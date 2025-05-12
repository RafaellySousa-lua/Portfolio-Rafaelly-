document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    once: true,
    duration: 800
  });
});

document.getElementById('menu-icon').addEventListener('click', function() {
  const navLeft = document.querySelector('.nav-left');
  navLeft.style.display = navLeft.style.display === 'block' ? 'none' : 'block';
});

