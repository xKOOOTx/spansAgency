const mobilePlayerSubmenu = document.querySelector('.mobile__playerSubmenu')
const mobilePlayerSubMenuBtn = document.getElementById('mobilePlayerMenu');

mobilePlayerSubMenuBtn.addEventListener('click', () => {
    mobilePlayerSubmenu.classList.toggle('mobile__playerSubmenu-active')
    mobilePlayerSubMenuBtn.classList.toggle('mobile__playerMenu_element-active')
})
