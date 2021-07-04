const profileBtn = document.querySelector('.profile');
const aside = document.querySelector('.aside')
const body = document.body

if (document.documentElement.clientWidth < 800) {
    profileBtn.addEventListener('click', () => {
        aside.classList.toggle('mobile-active')
        body.classList.toggle('overflowHid')
    })
}
