let hamburguesa = document.querySelector('#barras')
let slidebar = document.querySelector('.slidebar')

hamburguesa.addEventListener('click', ()=> {
    hamburguesa.classList.toggle('active')
    slidebar.classList.toggle('active')
})
