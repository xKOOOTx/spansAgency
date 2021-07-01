const asideMenu = document.getElementById('asideMenu');
const asideSubMenu = document.getElementById('asideSubMenu');
const asideArrowUp = document.getElementById('asideArrowUp');

asideMenu.addEventListener('click', () => {
    asideSubMenu.classList.toggle('aside__submenu-disabled');
    asideMenu.classList.toggle('aside__menu_element-active')
})
