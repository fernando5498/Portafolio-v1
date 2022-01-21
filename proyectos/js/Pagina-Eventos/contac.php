<?php include('header.php'); ?>
<!-- Contact -->
<section id="contacto" class="pad_100">
    <ul class="row ">
        <li class="google-maps col-xl-8 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1972.3957887706447!2d-71.14527794300064!3d8.61599853210484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1641354441752!5m2!1ses!2sve" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </li>
        <li class="formulario col-xl-4 col-12 mt-5 mt-xl-0">
            <h3>Dejanos Un Mensaje</h3>
            <form action="procesos/submit.php" method="POST">
                <input type="name" name="nombre" placeholder="Tu nombre">
                <input type="email" name="email" placeholder="Tu email" id="">
                <input type="tel" name="tel" placeholder="Tu telefono">
                <textarea name="mensaje" placeholder="Tu mensaje"></textarea>
                <button class="black" type="submit" name="submit">Enviar Mensaje</button>
            </form>
        </li>
    </ul>
</section>
<?php include('footer.php');
include('scripst.php')
?>
