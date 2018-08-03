<?php 
	require '../../../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$service = json_decode($json);
	$q = $database->q($con, 'INSERT INTO servicios(tipo, nombre, descripcion, costo, precio) VALUES("'.$service->type.'","'.$service->name.'", "'.$service->description.'", '.$service->price.', '.$service->price2.');');
	if ($q) {
		echo "true";
	} else {
		echo "false";
	}
 ?>