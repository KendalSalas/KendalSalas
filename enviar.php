<?php
    $destino = "kensalas16.ks@gmail.com";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location:enviar.html");
?>