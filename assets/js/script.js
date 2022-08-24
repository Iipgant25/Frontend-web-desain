const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});