let asideRedes = document.getElementById('aside')
let subir = document.querySelector('.go-top')

subir.addEventListener('click', scrollTop)

function scrollTop() {
    var top = document.documentElement.scrollTop
    if (top > 0) {
        window.scrollTo(0, 0)
    } else {
        window.scrollTo(0, document.body.scrollHeight);

    }
}



document.addEventListener('scroll', () => {
    let iconTopBottom = document.documentElement.scrollTop

    if (iconTopBottom > 0) {
        subir.classList.add('active')
    } else {
        subir.classList.remove('active')
    }
})