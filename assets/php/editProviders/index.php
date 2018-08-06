<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$provider = json_decode($json);
	$q = $database->q($con, 'UPDATE proveedores SET nombre="'.$provider->name.'", telefono='.$provider->tel.', correo="'.$provider->email.'", fecha_alta="'.$provider->highDate.'", telefono_contacto='.$provider->tel_con.', correo_contacto="'.$provider->email_con.'" WHERE correo="'.$provider->email.'";');
	if ($q) {
		echo "true";
	} else {
		echo 'false';
	}
 ?>