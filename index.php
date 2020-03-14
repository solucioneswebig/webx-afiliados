<?php
if(!isset($_SESSION)){
	session_start();
}
$_SESSION["validarSession"] = "no";
//controllers
require_once "controladores/plantilla.controlador.php";
require_once "controladores/usuarios.controlador.php";

//modelos
require_once "modelos/ruta.php";
require_once "modelos/usuarios.model.php";
require_once "modelos/funciones-bd.php";

//plugin
require_once "librerias/mailer/class.phpmailer.php";
require_once "librerias/mailer/class.smtp.php";

$plantilla = new ControladorPlantilla();
$plantilla -> plantilla();