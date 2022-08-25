let documento = document.querySelector('main')
let menuToggle = document.querySelector('.navbar-toggler')
let navbarCollapse = document.querySelector('.navbar-collapse')

documento.addEventListener('click', () => {

    if (navbarCollapse.classList.contains('show')) {
        menuToggle.click()

    } else {

    }

})