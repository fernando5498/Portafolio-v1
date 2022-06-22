<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raul Pineda</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="icon-font/flaticon.css">
    <link rel="stylesheet" href="css/style.css">
    <meta name="theme-color" content="#4285f4">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BDMMMX2VV"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-6BDMMMX2VV');
    </script>

    <!-- Hotjar Tracking Code for https://raulfetch.herokuapp.com/ -->
    <script>
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () {
                (h.hj.q = h.hj.q || []).push(arguments)
            };
            h._hjSettings = {
                hjid: 3009285,
                hjsv: 6
            };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script');
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    </script>
    <link rel="shortcut icon" href="img/logo-sin-text.svg" type="image/x-icon">
</head>

<body class="overflow-hidden">



    <header id="header" class="header position-fixed">
        <div class="container">
            <nav class="navbar">
                <a href="#home">
                    <img width="40px" src="img/logo-sin-text.svg" alt="">
                </a>

                <button class="switch" id="switch">
                    <span><i></i></span>
                    <span><i></i></span>
                </button>

                <ul class="nav d-flex">
                    <li class="nav-link"><a class="active-link" href="index.html" data-page="home">Inicio</a></li>
                    <li class="nav-link"><a href="index.html#about-us" data-page="about-us">Acerca de mí</a></li>
                    <li class="nav-link"><a href="index.html#study" data-page="study">Estudios</a></li>
                    <li class="nav-link"><a href="index.html#skills" data-page="skills">Habilidades</a></li>
                    <li class="nav-link"><a href="index.html#works" data-page="works">Portafolio</a></li>
                    <li class="nav-link"><a href="index.html#contact" data-page="contact">Contáctos</a></li>
                </ul>
                <div class="menu-btn"></div>
            </nav>
        </div>
    </header>

    <!-- main -->

    <main class="">
        <div class="error-404">
            <img width="250" src="svg/Personaje-Principal.svg" alt="personaje">
            <h2>Error Pagina no Encontrada</h2>
        </div>
    </main>
    <script src="js/nav.js"></script>
</body>

</html>