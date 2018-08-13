<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$billing = json_decode($json);
	$q = $database->q($con, 'UPDATE facturas SET orden_cuenta="'.$billing->orden_cuenta.'", nombre_cliente="'.$billing->nombre_cliente.'", total_servicios='.$billing->total_servicios.', comision_pago_tarjeta='.$billing->comision_tarjeta.', total_orden='.$billing->total_orden.' WHERE id='.$billing->id);
	if ($q) {
		echo "true";
	} else {
		echo 'false';
	}
 ?>