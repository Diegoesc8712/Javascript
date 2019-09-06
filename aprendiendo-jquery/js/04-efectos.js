$(document).ready(function(){
  var caja = $("#caja");
    caja.hide();
    $("#ocultar").hide();
    $("#mostrar").click(function(){
    $(this).hide();
    $("#ocultar").show();
      caja.fadeIn('normal');
    });
    $("#ocultar").click(function(){
    $(this).hide();
    $("#mostrar").show();
        caja.fadeOut('fast');
    });
    $("#todoenuno").click(function(){
        caja.toggle('fast');
    });
    $("#animar").click(function(){
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: 'auto'
                    }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'

            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'

            }, 'slow')  
            .animate({
                borderRadius: '100px',
                marginTop: '0px'

            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: 'auto'
                        }, 'slow')  
                    ;

    });

    /*
    OTROS EFECTOS
    slideToggle
    slideUp
    slideUp

    ANIMACIONES
    animate({marginLeft; '500'}, 'slow');  // desplaza la caja al centro

    */
});