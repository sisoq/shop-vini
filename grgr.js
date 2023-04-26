/* Display the sub-menu when hovering over the main menu */
const navItems = document.querySelectorAll('.nav ul li');
const subNav = document.querySelector('.sub-nav');

navItems.forEach(item => {
item.addEventListener('mouseover', () => {
subNav.style.display = 'block';
});

item.addEventListener('mouseout', () => {
subNav.style.display = 'none';
});
});

/* Activate submission if valid data is entered in the registration form */
const form = document.querySelector('form');

form.addEventListener('submit', event => {
const email = document.querySelector('#email');
const password = document.querySelector('#password');

if (!email.value || !password.value) {
event.preventDefault();
alert('Please enter your email and password.');
}
});