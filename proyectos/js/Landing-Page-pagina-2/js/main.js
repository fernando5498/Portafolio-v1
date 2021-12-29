var menuIcono = document.querySelector('.menu-hamburguesa')
var menu = document.querySelector('.menu')

menuIcono.addEventListener('click', () => {
    menuIcono.classList.toggle('menu-hamburguesa-active')
    menu.classList.toggle('menu-active')
})

window.addEventListener('click', e => {
    if (menu.classList.contains('menu-active') && e.target != menu && e.target != menuIcono) {
        menuIcono.classList.toggle('menu-hamburguesa-active')
        menu.classList.toggle('menu-active')

    }
})

// /* --------------------- BUTTON TOP --------------------- */

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show')
    } else {
        document.querySelector('.go-top-container').classList.remove('show')
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})