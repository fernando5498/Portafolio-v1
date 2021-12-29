/* ---------------------------- PRELOAD --------------------------- */
window.onload = function() {
    $('#preload').fadeOut();
    $('body').removeClass('overflow-hidden')
        // $('.modal-container').removeClass('d-none')
};

// const cache = "Ignacio"
// localStorage.setItem('galeriaCompleta', cache)

// localStorage.getItem('galeriaCompleta')



/* --------------------- BOTON NOCHE -------------------- */

const btnSwitch = document.querySelector('#switch')
    // const bgVideo = document.querySelector('.video-bg')
    // const bgVideo2 = document.querySelector(".video-bg2")

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active-noche')
        // bgVideo.classList.toggle("d-none")
        // bgVideo2.classList.toggle('d-none')
        // bgVideo2.play()
        // Local storage del modo dark
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
        // bgVideo.classList.add("d-none")
        // bgVideo2.classList.remove('d-none')
        // bgVideo2.play()
} else {
    document.body.classList.remove('dark')

    btnSwitch.classList.remove('active-noche')
        // bgVideo.classList.remove("d-none")
        // bgVideo2.classList.add('d-none')
        // bgVideo2.play()
};



/* ---------------------------- GALERIA --------------------------- */
var grid = new Muuri('.grid', {
    layout: {
        // fillGaps: true,
        // horizontal : true , 
        // alignRight: true,
        // alignBottom : true , 
        rounding: true,
    }
});


/* ----------------------- FILTRO ----------------------- */

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('img-cargadas')
    const enlaces = document.querySelectorAll(".filter .filter-item")
    enlaces.forEach((item) => {
        item.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => {
                enlace.classList.remove('active-filter')
            })
            evento.target.classList.add('active-filter')


            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === "todos" ? grid.filter('[data-categoria') : grid.filter(`[data-categoria="${categoria}"]`)
        })
    })
})


/* ----------------------------- MENU ----------------------------- */

// =========== SCROLL SECTIONS ACTIVE LINK ===========
window.addEventListener("scroll", function() {
    var nav = document.querySelector(".bg-nav")
    nav.classList.toggle("navbar-down", window.scrollY > 0)
})

const sections = document.querySelectorAll("section")
const navLink = document.querySelectorAll(".nav-link a")

window.addEventListener("scroll", function() {
    let current = '';


    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id')
        }
    })

    console.log(current);
    navLink.forEach(li => {
        li.classList.remove('active-link')
        if (li.classList.contains(current)) {
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



/* ----------------------------- WELCOME ---------------------------- */
var welcomBtn = document.querySelector('.welcom-btn');
var modal = document.querySelector(".modal-container")
var modaContent = document.querySelector('.modal-content')
var cerrar = document.querySelectorAll('.cerrar')




welcomBtn.addEventListener('click', () => {
    modal.classList.add('mo-active')
    modal.style.display = 'flex'
    modaContent.classList.add('mo-con-active')
    modal.classList.remove('d-none')

})


cerrar.forEach(cer => {
    cer.addEventListener('click', () => {
        modal.style.display = 'none'
    })
})


/* -------------------- MODAL GALERIA ------------------- */



const overlay = document.getElementById('overlay')
var modalGaleria = document.querySelectorAll('.item img')


modalGaleria.forEach((img) => {
    const ruta = img.getAttribute('src')
    const url = img.parentNode.parentNode.dataset.link
    const repo = img.parentNode.parentNode.dataset.repositorio
    const download = img.parentNode.parentNode.dataset.download
    const categoria = img.parentNode.parentNode.dataset.categoria

    img.addEventListener('click', () => {

        overlay.classList.add('active-overlay')
        document.querySelector('.contenedor-img img').src = ruta
        document.querySelector('.repo-git').href = repo
        document.querySelector('.link-sitio').href = url
        document.querySelector('.link-descarga').href = download
        if (categoria === 'illustrator') {
            document.querySelector('.link-sitio').style.display = "none"
            document.querySelector('.repo-git').style.display = "none"

        } else {
            document.querySelector('.link-sitio').style.display = "flex"
            document.querySelector('.repo-git').style.display = "flex"

        }
    })


})

/* --------------------- MODAL VIDEO -------------------- */

var modalvideo = document.getElementById('modal-video')
var Video = document.querySelectorAll('.item-content video')

Video.forEach((vid) => {
    const rutaVid = vid.getAttribute('src')
    const canalYoutube = vid.parentNode.parentNode.dataset.link
    const downVid = vid.parentNode.parentNode.dataset.download
    vid.addEventListener('click', () => {
        modalvideo.classList.add('active-video')
        const modal = document.querySelector('.video-container video')
        modal.src = rutaVid

        document.querySelector('.link-video').href = canalYoutube
        document.querySelector('.download-video').href = downVid

    })
})



/* -------------------- BOTON CERRAR -------------------- */
document.querySelector('.cerrar-overlay').addEventListener('click', () => {
    overlay.classList.remove('active-overlay')
})
document.querySelector('.cerrar-overlay-video').addEventListener('click', () => {
    modalvideo.classList.remove('active-video')
    const videoReproduc = document.querySelector('.video-container video').pause()

})

/* -------------- CERRAR OVERLAY POR FUERA -------------- */
overlay.addEventListener('click', (fuera) => {
    if (fuera.target.id == 'overlay') {
        overlay.classList.remove('active-overlay')
    }
})
modalvideo.addEventListener('click', (fuera) => {
    if (fuera.target.id == 'modal-video') {
        modalvideo.classList.remove('active-video')
        const videoReproduc = document.querySelector('.video-container video').pause()

    }
})