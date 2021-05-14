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
        pass1 = document.getElementById('pass1');
        pass2 = document.getElementById('pass2');

        if (pass1.value != pass2.value) {
            document.getElementById("error").classList.add("mostrar");

            return false;
        } else {

            document.getElementById("error").classList.remove("mostrar");
            document.getElementById("ok").classList.remove("ocultar");
            document.getElementById("login").disable = true; 

            setTimeout(function() {
                location.reload();
            }, 3000);

            return true;
        }
    }
    
});