
<?php 


if (isset($_POST['submit'])) {
    if (
        empty($_POST['nombre'])
        ||empty($_POST['email'])
        ||empty($_POST['mensaje']))
        {
        header('Location:../contacto.html?llena-todos-los-campos');
        exit();
    }else{
        // datos del formulario 
        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        
        if (empty($_POST['tel'])) {
            $tel = 'No ingreso telefono';
        }else{
            $tel = $_POST['tel'];
        }
        $mensaje = $_POST['mensaje'];
        echo "Todo bien hasta aqui";


        
        


        $para = "raul321.pinedag@gmail.com";
        $de = $para;
        // asunto
        $asunto = 'Hola es mi primer correo';
        // cabecera
        $headers = 'From:$de';
        $headers .= 'MIME-Version:10';
        $headers .= 'Context-type:text/html:charset=utf-8';
        // mensaje
        $mensajeEmail=
        "<html>
        <body>
        <h3>Tu Mensaje fue enviado</h3>
        <p>nombre:$nombre</p>
        <p>email:$email</p>
        <p>mensaje:$mensaje</p>
        <p>telefono:$tel</p>
        </body>
        </html>
        ";

        // Enviar el Formulario

        $enviar = mail($para,$asunto,$mensajeEmail,$headers);
        if ($enviar) {
            echo"Mensaje Enviado";
        }else{
            echo "Upps no se envio el formulario";
        }
    }
}else{
    // si no se manda el formulario regresa a contacto
    header('Location:../contacto.html?error;');
}

?>

<h3>
    <?php echo $mensaje ?>
</h3>

<?php echo "Enviaste un mensaje" ?>