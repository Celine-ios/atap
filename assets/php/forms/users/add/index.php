<?php 
	include '../../../class/database/index.php';
	$json = file_get_contents('php://input');
	$user = json_decode($json);
	$database = new Database();
	$conn = $database->con();
	$sel = $database->sel($conn);
	$date = date('Y-m-d');
	$q = $database->q($conn, 'INSERT INTO usuarios(nombre, telefono, correo, fecha_ingreso, usuario, contrasena) VALUES("'.$user->name.'","'.$user->tel.'","'.$user->email.'","'.date('Y-m-d').'","'.$user->user.'","'.$user->password.'");');
	if ($q) {
		echo "true";
		return;
	} else {
		echo "false";
	}
 ?>