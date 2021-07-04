const profileBtn = document.querySelector('.profile');
const aside = document.querySelector('.aside')
const body = document.body

profileBtn.addEventListener('click', () => {
    aside.classList.toggle('mobile-active')
    body.classList.toggle('overflowHid')
})
