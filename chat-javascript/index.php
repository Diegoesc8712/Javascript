
<?php
// session_start();
// $_SESSION['canalSeleccionado'] = '/data/content/html/librerias-2015-beta/configuraciones/requires.pruebasforo.php';
if ($_SESSION['autenticado']){
$idusuario = $_SESSION['datosUsuario']['idusuario_web'];
include "db.php";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Chat</title>
    <link rel="stylesheet" type="text/css" href="estilos.css"/>

    <script type="text/javascript">
        function ajax(){
            var req = new XMLHttpRequest();
            req.onreadystatechange =function(){
                if (req.readyState == 4 && req.status == 200){
                    document.getElementById('chat').innerHTML = req.responseText;
                }
            }
            req.open('GET', 'chat.php', true);
            req.send();
        }

        setInterval(function(){ajax();}, 1000);
       
    
    </script>
<body onLoad="ajax();">

    <div id="contenedor">
        <div id="caja-chat">
            <div id="chat">
                
            </div>
        </div>
        <form method="POST" action="index.php">
               <textarea name="mensaje" placeholder="Ingresar Mensaje"></textarea>
               <input type=submit name="enviar" value="Enviar">
        </form>
        <?php
        if (isset($_POST['enviar'])){
           $mensaje = $_POST['mensaje'];
            
                $consulta = "insert into chat(idusuario_web, idconversacion, mensaje) VALUES ('$idusuario', '$idusuario', '$mensaje')";
                    $ejecutar = $conexion->query($consulta);
                    
        }
    }
        ?>
    </div>

    
</body>
</html>