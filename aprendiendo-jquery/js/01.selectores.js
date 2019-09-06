$(document).ready(function(){
  // Selector ID
$("#parrafo").css("background", "Red")
                         .css("color", "white");



//  Selector de clases
var mi_clase = $('.zebra');
 mi_clase.css("border", "4px dashed blue")


 // selector de etiquetas
 var parrafos = $('p').css("cursor", "pointer");

    parrafos.click (function(){
        var that = $(this);


        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    
    });


    // selectores de atributos
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // otros
    //$('p, a').addClass('margen-superior');

    var busqueda = $("#caja").find('.resaltado');

    console.log (busqueda);
});  

