<?php

$servidor = "10.10.0.131";
$usuario = "reuth";
$password = "AV!GM!db!2014";
$base_datos = "aulavirtual_foros_argos";

$conexion = new mysqli($servidor, $usuario, $password, $base_datos);


function formatearFecha($fecha){
    return date ('g:i a', strtotime($fecha));
}
?>