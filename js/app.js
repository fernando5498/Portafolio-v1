/* ---------------------------- PRELOAD --------------------------- */
window.onload = function () {
    $('#preload').fadeOut();
    $('body').removeClass('overflow-hidden')
};

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



/* ---------------------------- GALERIA --------------------------- */
let galery = document.querySelector('.grid')

var grid = new Muuri(galery, {
    layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false
    },
    layoutOnResize: 150,
    layoutOnInit: true,
    layoutDuration: 300,
    layoutEasing: 'ease',
    dragEnabled: false,




});


window.addEventListener('scroll', () => {
    grid.refreshItems().layout();

})



/* ----------------------- FILTRO ----------------------- */

window.addEventListener('load', () => {

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

/* --------------------- MODAL VIDEO -------------------- */

var modalvideo = document.getElementById('modal-video')
var Video = document.querySelectorAll('.item-content video')



Video.forEach((vid) => {
    const rutaVid = vid.getAttribute('src')
    const canalYoutube = vid.parentNode.parentNode.dataset.link
    const downVid = vid.parentNode.parentNode.dataset.download
    const title = vid.parentNode.parentNode.dataset.title
    const fecha = vid.parentNode.parentNode.dataset.fecha
    const description = vid.parentNode.parentNode.dataset.description
    let newUrl = `https://www.youtube.com/embed/${rutaVid}`

    vid.addEventListener('click', () => {
        modalvideo.classList.add('active-video')
        const modal = document.querySelector('.video-container iframe')
        modal.src = newUrl
        document.querySelector('.vid-descrip').innerHTML = description

        const tituloItem = document.querySelectorAll('.item-title')
        tituloItem.forEach((titulo) => {
            titulo.innerHTML = title
        })
        const fechaItem = document.querySelectorAll('.item-fecha')
        fechaItem.forEach((time) => {
            time.innerHTML = fecha
        })

        document.querySelector('.link-video').href = canalYoutube
        document.querySelector('.download-video').href = downVid

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
    const title = img.parentNode.parentNode.dataset.title
    const fecha = img.parentNode.parentNode.dataset.fecha
    const description = img.parentNode.parentNode.dataset.description



    img.addEventListener('click', () => {

        overlay.classList.add('active-overlay')
        document.querySelector('.contenedor-img img').src = ruta
        document.querySelector('.repo-git').href = repo
        document.querySelector('.link-sitio').href = url
        document.querySelector('.link-descarga').href = download
        document.querySelector('.item-description').innerHTML = description

        const tituloItem = document.querySelectorAll('.item-title')
        tituloItem.forEach((titulo) => {
            titulo.innerHTML = title
        })
        const fechaItem = document.querySelectorAll('.item-fecha')
        fechaItem.forEach((time) => {
            time.innerHTML = fecha
        })
        if (categoria === 'illustrator') {
            document.querySelector('.link-sitio').style.display = "none"
            document.querySelector('.repo-git').style.display = "none"

        } else {
            document.querySelector('.link-sitio').style.display = "flex"
            document.querySelector('.repo-git').style.display = "flex"

        }

    })


})

/* -------------------- BOTON CERRAR -------------------- */
document.querySelector('.cerrar-overlay').addEventListener('click', () => {
    overlay.classList.remove('active-overlay')

})
document.querySelector('.cerrar-overlay-video').addEventListener('click', () => {
    modalvideo.classList.remove('active-video')
    const videoReproduc = document.querySelector('.video-container iframe').src = `yotube.com`

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
        const videoReproduc = document.querySelector('.video-container iframe').src = `yotube.com`


    }
})

/* --------------------- FORMULARIO --------------------- */
const buttomGmail = document.querySelector('.gmail')
const form = document.querySelector('.container-form')
const closeForm = document.querySelector('.close--form')
buttomGmail.addEventListener('click', function (e) {
    e.preventDefault()
    form.classList.toggle('active')
})
closeForm.addEventListener('click', () => {
    form.classList.remove('active')
})
form.addEventListener('click', (fuera) => {
    if (fuera.target.id == 'container-form') {
        form.classList.remove('active')
    }
})

// scrollreveal
ScrollReveal().reveal('.card', {
    distance: '150%',
    origin: 'bottom',
    duration: 1800
});
ScrollReveal().reveal('.contact-redes', {
    distance: '150%',
    origin: 'bottom',
    duration: 1800
});



/* ----------------- ANIMACION ICON INFO ---------------- */

let iconInfo = document.querySelectorAll('.info-icon span i')

iconInfo.forEach(icon => {
    icon.addEventListener('click', () => {
        function saltar(i) {
            i.style.animation = "saltar-icon 1s ease-in-out"

            setTimeout(() => {

                return i.style.animation = ""
            }, 1000);
        }
        saltar(icon)
    })

})