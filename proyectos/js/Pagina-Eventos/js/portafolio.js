/* ---------------------- LIGHTBOX ---------------------- */

lightbox.option({
    'resizeDuration': 200,
    'disebleScrolling': true
})

// menu
let bodyScroll = $('body').height();
$(window).scroll(function() {
    let scroll = $(window).scrollTop()
    if (scroll >= $('body').offset().top - 300) {
        $('#nav').addClass('nav-overlay')
    } else {
        $('#nav').removeClass('nav-overlay')
    }
})
$(window).scroll();