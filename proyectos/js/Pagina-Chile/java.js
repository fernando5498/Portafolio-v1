let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth; //toma el ancho del objeto en poscision 0
let menuBurguer = document.querySelector('.toggle')
let intervalo = 5000;
let bgWidth = 50

//////////////////////////////////////////////////////////////////////////


menuBurguer.addEventListener('click', () => {
    menuBurguer.classList.toggle('active')
    document.querySelector('.menu').classList.toggle('active')
})

window.addEventListener("scroll", function() {

    document.querySelector('.navegacion').classList.toggle("navbar-down", window.scrollY > 0)
})




//resize es cuando cambian la resolucion de la pagina
window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
});

setInterval(function() {
    slides();

}, intervalo);

function slides() {
    document.querySelector('.contenedor').style.backgroundPosition = (bgWidth * contador) + '%'
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .4s";

    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform .3s";
            document.querySelector('.contenedor').style.backgroundPosition = '0%'
            contador = 1;

        }, 2500);
    }
}


////////////////////////////LIBRERIA/////////////////////////////////////

window.sr = ScrollReveal();

sr.reveal(".navegacion", {
    duration: 2800,
});

sr.reveal(".texto1", {
    duration: 2800,
    origin: 'right',
    distance: '400px'
});

sr.reveal(".botonfinal", {
    duration: 2800,
    origin: 'bottom',
    distance: '400px'
});


sr.reveal(".medio", {
    duration: 2800,
    origin: 'left',
    distance: '400px'
});

sr.reveal(".segundo", {
    duration: 2800,
    origin: 'bottom',
    distance: '400px'
});

sr.reveal(".iconos", {
    duration: 2800,
    origin: 'left',
    distance: '400px'
});

sr.reveal(".video", {
    duration: 2500,
});