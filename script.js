let hamburguesa = document.querySelector('#barras')
let menu = document.querySelector('#nav-menu')

hamburguesa.addEventListener('click', ()=> {
    hamburguesa.classList.toggle('active')
    menu.classList.toggle('active')
})