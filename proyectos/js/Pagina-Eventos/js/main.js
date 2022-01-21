// Detectar el ancho del diamante y poner el mismo valor en Height

let diamante_width = $('.diamante').width();
$('.diamante').css({
    height: diamante_width
})

// menu burguer

const menuActive = document.querySelector('.menu')
const menuBurguer = document.querySelector('.menu-hamburguesa')
const menuLink = document.querySelectorAll('.menu li a')

menuBurguer.addEventListener('click', () => {
    menuBurguer.classList.toggle('active')
    menuActive.classList.toggle('active')
})

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menuBurguer.classList.remove('active')
        menuActive.classList.remove('active')
    })
})

// menu
let bodyScroll = $('body').height();
$(window).scroll(function() {
    let scroll = $(window).scrollTop()
    if (scroll >= $('body').offset().top + 100) {
        $('#nav').addClass('nav-overlay')
    } else {
        $('#nav').removeClass('nav-overlay')
    }
})
$(window).scroll();


let sections = document.querySelectorAll('section')
let navLi = document.querySelectorAll('.menu li')


window.addEventListener('scroll', () => {
    let currnet = '';
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
            currnet = sec.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('link-active')
        if (li.classList.contains(currnet)) {
            li.classList.add('link-active')
        }
    })
})


$(window).scroll();