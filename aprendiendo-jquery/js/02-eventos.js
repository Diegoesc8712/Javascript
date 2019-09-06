$(document).ready(function(){
    // alert("todo esta ok");


    //EVENTOS MouseOver y MouseOut
    var caja = $("#caja");

    caja.mouseover(function(){
        $(this).css("background","red");
    });
    caja.mouseout(function(){
        $(this).css("background","green");
    });

    //EVENTO HOVER
    var caja1 = $("#caja1");

    function cabiarojo(){
        $(this).css("background","black")
                .css("color", "white")
    };

    function cambiaverde(){
        $(this).css("background","blue")
                .css("color", "black")
    };

    caja1.hover(cabiarojo, cambiaverde);

    //EVENTO CLICK Y DOBLE CLIC
    caja1.click(function(){
        $(this).css("background", "white")
            .css("color", "black");
    });
    caja.click(function(){
        $(this).css("background", "black")
            .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "white")
            .css("color", "black");
    });

    caja1.dblclick(function(){
        $(this).css("background", "black")
            .css("color", "white");
    });

    //focus y blur

    var nombre = $("#nombre");

    nombre.focus(function(){
        $(this).css("border", "2px red solid")
    })

    nombre.blur(function(){
        $(this).css("border", "5px green solid")
        
        $("#datos").text($(this).val()).show();
    })

    // mousedown y mouseup

    var datos=  $("#datos");
    datos.mousedown(function(){
        $(this).css("border-color", "red");
    })

    datos.mouseup(function(){
        $(this).css("border-color", "blue");
    })

    //mousemove

    $(document).mousemove(function(){
        var sigueme = $("#sigueme");
        // console.log("En X: " + event.clientX);
        // console.log("En Y: " + event.clientY);
        sigueme.css("left", event.clientX)
               .css("top", event.clientY);

        //ocultar el cursor
        $('body').css("cursor", "none");
    });


});