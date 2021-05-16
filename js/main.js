$(document).ready(function(){
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight"); 
                } else {
                label.removeClass("highlight");   
                }   
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight"); 
            } 
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });

    function verificarPasswords(){
        pass1 = $('#formPass1').val();
        pass2 = $('#formPass2').val();
        nombre = $('#formUser').val()
        email = $('#formEmail').val()
        
        if(
            pass1 === '' || pass2 === '' || 
            nombre === '' || email === ''
        ) {
            // console.log(`${pass1},${pass2},${nombre},${email}`);
            Swal.fire(
                'Error',
                'Faltan datos por completar',
                'error'
            );
            return false;
        }

        if (pass1 !== pass2) {
            // document.getElementById("error").classList.add("mostrar");
            Swal.fire(
              'Error',
              'Las constraseñas deben ser iguales',
              'error'
            )
            return false;
        } else {

            // document.getElementById("error").classList.remove("mostrar");
            // document.getElementById("ok").classList.remove("ocultar");
            // document.getElementById("login").disabled() = true;
            // setTimeout(function() {
            //     location.reload();
            // }, 3000);
            return true;
        }
    }

    //#region Metodo Registro
    $('#btnreg').click(() => {
        var status = verificarPasswords();
        if(status) {
            enviarRegistro();
        }
        // enviarRegistro();
    });

    function enviarRegistro(){
        // console.log('se enviara el registro');
        var url = 'http://nriverv.pythonanywhere.com/api/v1/signup/';
        var datos = new Object();
        datos.username = $('#formUser').val()
        datos.email = $('#formEmail').val()
        datos.password = $('#formPass1').val()

        validacionesFormulario(datos);
        

        // Aca se hace ls solicitud POST
        $.post(url, datos, (data) => {
            console.log(data);
        });
    }
    //#endregion Metodo Registro


    //#region Metodo Iniciar Sesión
    $('#btnLogin').click(()=>{
        var status = validarDatosLogin();
        if(status){
            iniciarSesion();
            
    
            

        }
    });
    

    //#endregion Metodo Inicar Sesión

    function iniciarSesion(){
        var url = 'http://nriverv.pythonanywhere.com/api/v1/signin/';
        var datos = new Object();
        datos.username = $('#loginUser').val()
        datos.password = $('#loginPass').val()
        console.log(datos);
        console.log(datos);
        $.post(url, datos, (data) => {
            console.log(data);
            // Acá haces todo lo que tengas que hacer al recibir los datos
            // los datos del servidor estan en la variable "data";
            window.location="home.html";
        });
    }

    function validarDatosLogin() {
        // Acá haces todas las validaciones
        
        return true;
    }

    function validacionesFormulario() {
        var url = 'http://nriverv.pythonanywhere.com/api/v1/validation/all/';
        var datos = new Object();
        datos.username = $('#formUser').val()
        datos.email = $('#formEmail').val()
        datos.password1 = $('#formPass1').val()
        datos.password2 = $('#formPass2').val()
        $.post(url, datos, (data) => {
            console.log(data);
            // Acá haces todo lo que tengas que hacer al recibir los datos
            // los datos del servidor estan en la variable "data";
            return true;
        });
    }

    
    
    
});
