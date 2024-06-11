const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const navbarLinks = document.querySelectorAll('.navbar__links h1');

navbarLinks.forEach(link => {
  link.addEventListener('click', navigateToPage);
});

function navigateToPage(event) {
  event.preventDefault();
  const targetUrl = event.target.parentElement.getAttribute('href');
  window.location.href = targetUrl;
}
