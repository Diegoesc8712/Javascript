$(document).ready(function(){
    reloadLinks();
    $("#add_button").click(function(){
        var link = $("#add_link").val();
        $('#menu').append('<li><a href="'+link+'"></a></li>');
        reloadLinks();
        $("#add_link").val('');
    })

   function reloadLinks(){
       $('a').each(function(index){
            var that = $(this);
            var enlace = that.attr("href");
            
            //con el atribuyo target _blank, habre el link en una nueva pestaña
            that.attr('target', '_blank')
            that.text(enlace);
    
       })
    } 
})