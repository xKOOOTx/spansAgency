const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile__menu-active');
})

// more btn
const mobileMenuMore = document.getElementById('mobileMenu_more');
const mobileSubMenu = document.getElementById('mobileSubMenu');


mobileMenuMore.addEventListener('click', () => {
    mobileSubMenu.classList.toggle('mobile__subMenu-active')
})
