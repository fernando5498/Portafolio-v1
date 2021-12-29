const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelectorAll('.showcase')
const menu = document.querySelector('.menu-burger')
const menu_link = document.querySelectorAll('.menu ul li a')
const videos = document.querySelectorAll('.videos')

window.onload = function() {

    for (let i = 0; i < menu_link.length; i++) {
        menu_link[i].click()
        menu_link[0].click()
    }
    document.body.style.opacity = '1'
}


menuToggle.addEventListener('click', () => {
    showcase.forEach((page) => {
        page.classList.toggle('active');
    })
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
})



// se añade un evento que al hacer click genera la siguiente funcion :
// esta hace que menuToggle y showcase se le añadan una clase 
// se pone el elemento toggle(javascript) que mantiene o alterna entre presionado
// o al aire....se debe especificar que clase se le añadira


menu_link.forEach((link) => {

    link.addEventListener('click', () => {
        // const document.querySelectorAll('.toggle').classList.remove('active')
        videos.forEach((video) => {
            video.play()
        })
        const enlace = link.textContent
        showcase.forEach((page) => {
            const categoria = page.getAttribute('id')
            if (categoria == enlace) {
                page.style.top = "0"
                page.style.opacity = "1"
            } else {

                page.style.top = "100%"
                page.style.opacity = "0"
            }
        })

    })

    // cerrar menu

    // link.addEventListener('click', () => {
    //     setTimeout(() => {
    //         menuToggle.classList.remove('active')
    //         logo.classList.remove('active')

    //         showcase.forEach((page) => {
    //             page.classList.remove('active');
    //         })

    //     }, 1000);

    // })

})

// textContent = saca el contenido html de la etiqueta

const buscar_btn = document.querySelector('.buscar-btn')

buscar_btn.addEventListener('click', () => {
    document.querySelector('.buscador').style.left = "0px"
})

document.querySelector('.cerrar_bus').addEventListener('click', () => {
    document.querySelector('.buscador').style.left = "-150%"

})

/* -------------- BOTTON-OSCURECES SCENA 2 -------------- */

const videoPrint = document.querySelector('.video-print')
videoPrint.addEventListener('click', () => {
    document.querySelector('.text-2').classList.toggle('active')
    videoPrint.classList.toggle('active')
})