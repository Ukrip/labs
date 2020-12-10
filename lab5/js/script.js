// header fixed

const header = document.querySelector('.header')


if(header.pageYOffset <= 70){
    header.classList.remove('fixed')
}else{
    header.classList.add('fixed')
}

//scroll to blocks

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const nav_link = document.querySelectorAll('.nav_header')

nav_link.forEach( event => {
    event.addEventListener('click', function(){
        let element = document.querySelector(this.dataset.scroll)
        scrollTo(element)
    })
})

