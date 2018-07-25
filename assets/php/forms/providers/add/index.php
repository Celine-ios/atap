<?php 
	require '../../../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$provider = json_decode($json);
	$q = $database->q($con, 'INSERT INTO proveedores(nombre, telefono, correo, fecha_alta, telefono_contacto, correo_contacto) VALUES("'.$provider->name.'",'.$provider->tel.', "'.$provider->email.'", "'.date('Y-m-d').'", '.$provider->tel.', "'.$provider->con_email.'");');
	if ($q) {
		echo "true";
	} else {
		echo "false";
	}
 ?>