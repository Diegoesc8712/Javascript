$(document).ready(function(){
   //slider
        if (window.location.href.indexOf('index') > -1 ) {
            
            
            $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200, // esto es el tamaño del slider
            responsive: true,
            pager: true // con esto se coloca o se quita  los puntos de la parte inferior del slider
            });
        };

        //POST
        if (window.location.href.indexOf('index') > -1 ) {
                    var post = [
                    {
                        title: 'Prueba de titulo 1',
                        date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' ' + moment().format("YYYY"),
                        content: 'Lorem Ipsum has been the industrys standard dummy text'
                    },
                    {
                        title: 'Prueba de titulo 2',
                        date: new Date(),
                        content: 'Lorem Ipsum has been the industrys standard dummy text'
                    },
                    {
                        title: 'Prueba de titulo 3',
                        date: new Date(),
                        content: 'Lorem Ipsum has been the industrys standard dummy text'
                    },
                    {
                        title: 'Prueba de titulo 4',
                        date: new Date(),
                        content: 'Lorem Ipsum has been the industrys standard dummy text'
                    },
                    {
                        title: 'Prueba de titulo 5',
                        date: new Date(),
                        content: 'Lorem Ipsum has been the industrys standard dummy text'
                    }
                
                ];
            post.forEach((item, index)=>{

                    var post = `
                            <article class="post">
                                <h2>${item.title}</h2>
                                <span class="date">${item.date}</span>
                                <p>${item.content}</p>
                                <a href="#" class="button-more">Leer más</a>
                            </article>
                            `;

                            $("#posts").append(post);
                });
        }

    //SELECTOR DE TEMA
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    })
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    })
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    })
      

    // SCROLL ARRIBA DE LA WEB
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //LOGIN FALSO
    $("#login form").submit(function(){
        
       var form_name = $("#form_name").val();
       localStorage.setItem("form_name", form_name);
       
                
    });
    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvendo, " + form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    }
    //ACORDEON
    if (window.location.href.indexOf('about') > -1 ) {
        $("#acordeon").accordion();
    };

    //RELOJ
    if (window.location.href.indexOf('reloj') > -1 ) {
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);

        }, 1000);
    }

    // validacion de campos
    if (window.location.href.indexOf('contact') > -1 ) {
       
        $("form input[name ='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
             
        //  dateFormat: 'dd-mm-yyyy'
        //  });

        $.validate({
            lang: 'es',
            
        });
       
    }
});