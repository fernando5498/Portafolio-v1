$('.owl-carousel.noticias-slider').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2

        },
        1000: {
            items: 3
        }
    }
})

new WOW().init();

/* --------------------- BUTTON TOP --------------------- */
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        $('.go-top').addClass('active')
    } else {
        $('.go-top').removeClass('active')
    }
})

/* -------------------- VIDEO PLAYER -------------------- */


var windowsize = $(window).width();



if (windowsize < 575) {
    let player = new Plyr('.video-player-evulus', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'settings', 'airplay', 'fullscreen'],
        quality: {
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
        },
        settings: ['quality', 'speed', 'loop'],
    })
} else {
    let player = new Plyr('.video-player-evulus', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'pip', 'airplay', 'fullscreen'],
        quality: {
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
        },
        settings: ['quality', 'speed', 'loop'],
    })
}


/* ------------------ PAUSE RESPONSIVE ------------------ */
let videoReprod = document.querySelector('.plyr__video-wrapper')
let plyr = document.querySelector('.plyr')

videoReprod.addEventListener('click', () => {
    if (plyr.classList.contains('plyr--paused')) {
        document.querySelector('.video-player-evulus').play()
    } else {
        document.querySelector('.video-player-evulus').pause()
    }
});