// ========= MENU SHOW Y HIDDEN =========== 
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav_link')
const section = document.querySelectorAll('section[id]')
const navList = document.querySelector('.nav_item')

// SHOW

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})




// HIDDEN

closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('show')
    })
    // ========== REMOVE MENU ============


function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(cadaBoton => {
    cadaBoton.addEventListener('click', linkAction)
})

// =========== SCROLL SECTIONS ACTIVE LINK ===========

window.addEventListener('scroll', () => {
    //Recoje el tamaño en pixeles del eje Y
    const scrollY = window.pageYOffset

    section.forEach(current => {
        //Muetra la altura en pixeles
        const sectionHeight = current.offsetHeight

        //Devuelve la posición superior (en píxeles) 
        const sectionTop = current.offsetTop - 50

        // muestra el id que contiene section 
        const sectionId = current.getAttribute('id')

        console.log(sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
})