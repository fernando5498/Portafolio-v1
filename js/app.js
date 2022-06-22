/* ---------------------------- PRELOAD --------------------------- */
window.onload = function () {
    $('#preload').fadeOut();
    $('body').removeClass('overflow-hidden')
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
let itemsGallery = document.querySelectorAll('.item ')

itemsGallery.forEach((itemGal) => {

    let itemObject = {
        ruta: itemGal.firstElementChild.firstElementChild.getAttribute('src'),
        url: itemGal.dataset.link,
        repositorio: itemGal.dataset.repositorio,
        download: itemGal.dataset.download,
        categoria: itemGal.dataset.categoria,
        title: itemGal.dataset.title,
        fecha: itemGal.dataset.fecha,
        description: itemGal.dataset.description,
        tipo: itemGal.firstElementChild.firstElementChild.getAttribute('class')
    }


    itemGal.addEventListener('click', () => {
        overlay.classList.add('active-overlay')
        document.querySelector('.link-descarga').href = itemObject.download
        document.querySelector('.item-description').innerHTML = itemObject.description
        document.querySelectorAll('.item-title').forEach(title => {
            title.innerHTML = itemObject.title
        })
        document.querySelectorAll('.item-fecha').forEach(fecha => {
            fecha.innerHTML = itemObject.fecha
        })

        if (itemObject.tipo === "tipo-video") {
            document.querySelector('.overlay-container__content').innerHTML = `<iframe src="https://www.youtube.com/embed/${itemObject.ruta}"></iframe>`
            document.querySelector('.link-sitio').href = itemObject.url
            document.querySelector('.link-sitio').style.display = "flex"
            document.querySelector('.link-sitio').innerHTML = `Ver en Youtube`
            document.querySelector('.repo-git').style.display = "none"

        } else if (itemObject.tipo === "tipo-page") {
            document.querySelector('.overlay-container__content').innerHTML = `<img src="${itemObject.ruta}"></img>`
            document.querySelector('.repo-git').href = itemObject.repositorio
            document.querySelector('.link-sitio').href = itemObject.url
            document.querySelector('.link-sitio').style.display = "flex"
            document.querySelector('.repo-git').style.display = "flex"
        } else if (itemObject.tipo === "tipo-img") {
            document.querySelector('.overlay-container__content').innerHTML = `<img src="${itemObject.ruta}"></img>`
            document.querySelector('.link-sitio').style.display = "none"
            document.querySelector('.repo-git').style.display = "none"
        }

    })


})

/* -------------------- BOTON CERRAR -------------------- */
document.querySelector('.cerrar-overlay').addEventListener('click', () => {
    overlay.classList.remove('active-overlay')
})


/* -------------- CERRAR OVERLAY POR FUERA -------------- */
overlay.addEventListener('click', (fuera) => {
    if (fuera.target.id == 'overlay') {
        overlay.classList.remove('active-overlay')
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
// ScrollReveal().reveal('.card', {
//     distance: '150%',
//     origin: 'bottom',
//     duration: 1800
// });
// ScrollReveal().reveal('.contact-redes', {
//     distance: '150%',
//     origin: 'bottom',
//     duration: 1800
// });



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