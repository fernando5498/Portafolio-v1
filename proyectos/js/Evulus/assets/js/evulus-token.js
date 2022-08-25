/* ------------------ LOTTIE ANIMATION ------------------ */


contentGraphics = document.querySelector('.animation-graphics')

let animationStatic = bodymovin.loadAnimation({
    container: contentGraphics, // Required
    path: 'assets/animation-lottie/estadistica.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
})

const animationInit = (entradas, observador2) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            animationStatic.play()
        }
    })
}


const observador1 = new IntersectionObserver(animationInit, {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
})

observador1.observe(contentGraphics)