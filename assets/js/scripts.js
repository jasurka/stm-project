let modalForm = document.querySelector('.modal-login')
let overlay = document.querySelector('.overlay')

document.querySelector('.login').addEventListener('click', function (){
    //e.preventDefault()
    modalForm.classList.add('show')
    overlay.classList.add('show')
})
overlay.addEventListener('click', function (){
    modalForm.classList.remove('show')
    overlay.classList.remove('show')
})
document.querySelector('.close-button').addEventListener('click',function (){
    modalForm.classList.remove('show')
    overlay.classList.remove('show')
})