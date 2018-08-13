<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$wo = json_decode($json);
	$q = $database->q($con, 'insert into ordenes_trabajo(nombre_cuenta, nombre_cliente, fecha_trabajo, total_servicios, total_orden) values("'.$wo->accountName.'", "'.$wo->clientName.'", "'.$wo->workDate.'", '.$wo->servicesTotal.', '.$wo->orderTotal.')');
	if ($q) {
		echo "true";
	} else {
		echo "false";
	}

 ?>