const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburgesa1 = document.querySelector('.menu-amburgesa')
const cerrar = document.querySelector('.close')


imagenes.forEach(img => {
    img.addEventListener('click', () => {

        contenedorLight.classList.add('show')
        imagenesLight.classList.add('showImage')
        hamburgesa1.style.opacity = '0'
        hamburgesa1.style.display = 'none'

        const ruta = img.getAttribute('src')

        imagenesLight.src = ruta
            // contenedorLight.classList.toggle('show')
            // imagenesLight.classList.toggle('showImage')
            // hamburgesa1.style.opacity = '0'

    })
})


contenedorLight.addEventListener('click', (img) => {
    if (img.target !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburgesa1.style.opacity = '1'
        hamburgesa1.style.display = 'block'

    }
});