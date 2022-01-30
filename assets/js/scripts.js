let modalForm = document.querySelector('.modal-login')
let overlay = document.querySelector('.overlay')
let videoUrl = document.querySelector('.video-inner iframe').getAttribute('src')

document.querySelector('.login').addEventListener('click', function (){
    //e.preventDefault()
    modalForm.classList.add('show')
    overlay.classList.add('show')
})
overlay.addEventListener('click', function (){
    modalForm.classList.remove('show')
    overlay.classList.remove('show')
    document.querySelector('.video-inner iframe').setAttribute('src', videoUrl)
})
document.querySelector('.close-button').addEventListener('click',function (){
    modalForm.classList.remove('show')
    overlay.classList.remove('show')
})

document.querySelector('.video-button').addEventListener('click', function(){
    overlay.classList.add('show')
    document.querySelector('.video-modal').classList.add('show')
})

jQuery('.classes-row').slick({
    infinite:true,
    slidesToShow:3,
    dots:true,
    arrows:false,
    margin:20,
})