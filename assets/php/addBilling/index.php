<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$billing = json_decode($json);
	$q = $database->q($con, 'insert into facturas(orden_cuenta, nombre_cliente, total_servicios, comision_pago_tarjeta, total_orden) values("'.$billing->cuenta.'","'.$billing->nombre_cliente.'",'.$billing->total_servicios.','.$billing->comision_tarjeta.', '.$billing->total_orden.');');
	if ($q) {
		echo "true";
	} else {
		echo "false";
	}

 ?>