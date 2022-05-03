function validateLogin(){
        console.log("Caracteres: ", $("#password").val().length);
        if($("#password").val().length < 8)
            alert("La contraseña debe tener al menos 8 caracteres");
        else {
            if(!$('#nombre').val() || !$('#direccion').val() || !$('#e-mail').val() || !$('#telefono').val()) {
                alert("Todos los campos deben estar completos");
            }
            else {
                $('#login-hidden').css({'display': 'none'})
                $('#book-order').css({'display': 'block'})
            }
        };
}

function aplicar() {
    $("#descripcion").css({ "font-size": $("#V").val() + $("#U").val() });
}

function solicitar() {
    if(!$('#isbn').val() && !$('#titulo').val() && !$('#autor').val() && !$('#descripcion').val()) {
        alert('Por favor, ingrese un valor en al menos un campo')
        $('#formulario').submit(function(e){
            return false;
        });
    }
    else {
        $('#formulario').submit(function(e){
            return true;
        });
        document.getElementById("formulario").submit();
    }
}
