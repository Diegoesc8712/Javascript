<?php
include "db.php";
$_SESSION['canalSeleccionado'] = '/data/content/html/librerias-2015-beta/configuraciones/requires.pruebasforo.php';
$idusuario = $_SESSION['datosUsuario']['idusuario_web'];
    $consulta = "SELECT uw.dsnombre_completo as nombre, c.mensaje as mensaje, c.fecha as fecha FROM chat as c inner join usuarios_web as uw on uw.idusuario_web = c.idusuario_web where `idconversacion` = $idusuario order by c.id";
    $ejecutar = $conexion->query($consulta);
    while($fila = $ejecutar->fetch_array()):
?>
<div id="datos-chat">
    <span style="color: #1c62c4;"><?php echo $fila['nombre'];?>:</span>
    <span style="color: #848484;"><?php echo $fila['mensaje'];?></span>
    <span style= "float: right"><?php echo formatearFecha($fila['fecha']);?></span>
</div>
<?php endwhile; ?>