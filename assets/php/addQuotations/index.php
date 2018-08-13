<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$quotations = json_decode($json);
	$q = $database->q($con, 'insert into cotizaciones(nombre_cuenta, nombre_cliente, total_servicios, total_orden, comision_pago_tarjeta) values("'.$quotations->cuenta.'","'.$quotations->nombre_cliente.'",'.$quotations->total_servicios.','.$quotations->total_orden.', '.$quotations->comision_pago_tarjeta.');');
	if ($q) {
		echo "true";
	} else {
		echo "false";
	}

 ?>