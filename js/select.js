const selectOptionBlock = document.querySelector('.select__optionBlock');
const selectBlock = document.querySelector('.select__block');
const selectAnotherOption = document.querySelectorAll('.select__anotherOption');

selectOptionBlock.addEventListener('click', () => {
    selectBlock.classList.toggle('select__block-disabled')
})

selectAnotherOption.forEach( el => {
    el.addEventListener('click', () => {
        selectBlock.classList.add('select__block-disabled')
    })
})
