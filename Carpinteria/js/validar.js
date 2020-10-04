function validar(){
    var nombre, email, telefono, mensaje, expresion;

    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //Validar largos
    if(nombre === "" || email === "" || telefono === "" || mensaje === ""){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(nombre.length > 20){
        alert("Solo se aceptan 20 caracteres");
        return false;
    } else if(telefono.length > 12){
        alert("El campo número tiene demasiados digitos");
        return false;
    } else if(email.length > 40){
        alert("El email es muy largo");
        return false;
    } else if(!expresion.test(email)){
        alert("Ingrese un correo valido");
        return false;
    }


}