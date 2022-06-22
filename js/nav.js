/* ----------------------------- MENU ----------------------------- */

/* ------------------ BACKGROUND SCROLL ----------------- */
let headerNavBar = document.getElementById("header")

if (window.scrollY > 0) {
    headerNavBar.classList.add("navbar-down")

} else {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            headerNavBar.classList.add("navbar-down")
        } else {
            headerNavBar.classList.remove("navbar-down")
        }
    })
}



// =========== SCROLL SECTIONS ACTIVE LINK ===========



const sections = document.querySelectorAll("section")
const navLink = document.querySelectorAll(".nav-link a")




window.addEventListener("scroll", function () {
    let idSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            idSection = section.getAttribute('id')
        }
    })
    console.log(idSection);
    navLink.forEach(li => {
        li.classList.remove('active-link')
        if (li.dataset.page == idSection) {
            li.classList.add('active-link')
        }
    })
})

/* ------------------------ MENU-RESPONSIVE ----------------------- */

const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('burger')
    navigation.classList.toggle('nav-active')
})


/* ------------------- CERRAR MENU AL DAR CLICK ------------------- */

navLink.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.toggle('burger')
        navigation.classList.toggle('nav-active')
    })
})



/* --------------------- BOTON NOCHE -------------------- */

const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active-noche')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true')
    } else {
        localStorage.setItem('dark-mode', 'false')
    }
})


// obtenemos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark')
    btnSwitch.classList.add('active-noche')
} else {
    document.body.classList.remove('dark')

    btnSwitch.classList.remove('active-noche')
};