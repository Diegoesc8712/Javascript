$(document).ready(function(){
    // alert("hola");

    // ANIMACIONES --------

   

    // 1. DRAGGABLE= PERMITE MOVER LOS ELEMENTOS 
    $(".elemento").draggable();

     // 2.  REDIMENSIONAR = PERMITE CAMBIAR EL TAMAÑO 
     $(".elemento").resizable();
   

    // 3. SELECCIONAR ELEMENTOS DE LA LISTA
    // $(".lista").selectable();


    // 4. SORTABLE: PERMITE MOVER LOS ELEMENTOS DE LA LISTA. DEBE ESTAR SELECTABLE O SORTABLE NO LOS DOS
    $(".lista").sortable({
        update: function(event, ui){
            console.log("los elementos se movieron");
        }
    });


    // 5. DROPPTABLE= permite detectar cuando un elemento movido es soltado en este elemento
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("se solto el elemento");
        }
    });


    // 6. EFECTOS 
    $("#mostrar").click(function(){
        // $(".caja-ejectos").effect("explode"); //efecto explode explota el div. se debe usar effect("explode ya que jquery no permite usarlo de la otra manera")
        // $(".caja-ejectos").fadeToggle(); //efecto fadeToggle permite mostrar y ocultar
        // $(".caja-ejectos").toggle("explode"); // usa de una mejor manera las dos funciones anteriores. es la suma de esas dos
        // $(".caja-ejectos").toggle("blind"); // este efecto despliega y repliega desde arribael div
        // $(".caja-ejectos").toggle("fold"); // este efecto despliega y repliega desde arriba pero es diferente
        // $(".caja-ejectos").toggle("bling"); // este efecto despliega y repliega desde la esquina izquierda div
        // $(".caja-ejectos").toggle("slide"); // este efecto despliega y repliega desde el lado izquierda div
        // $(".caja-ejectos").toggle("drop"); // este efecto despliega y repliega desde el lado izquierda div con dragradado
        // $(".caja-ejectos").toggle("puff"); // este efecto despliega y repliega dimensionalmente de afuera para adentro
        // $(".caja-ejectos").toggle("scale"); // este efecto despliega y repliega dimensionalmente de adentro para afuera
        // $(".caja-ejectos").toggle("shake"); // aparece con efecto de vibracion


        // nota: a cada evento se le puede colocar la velocidad
        // $(".caja-ejectos").toggle("shake", "slow"); // aparece con velocidad lenta
        $(".caja-ejectos").toggle("shake", 4000); // 4 segundos


    });

    // tooltip= es un popup que aparece sobre algo cuando paso el cursor por encima
    $(document).tooltip();


    // POPUP -- CUADROS DE DIALOGO
    $("#lanzarpopup").click(function(){
        $("#popup").dialog();
    });


    //CALENDARIO // DATEPICKER
    $("#calendario").datepicker();

    //TABS Y PESTAÑAS
    $("#pestanas").tabs();



});