<?php 
	require_once '../../class/database/index.php';
	$json = file_get_contents('php://input');
	$generals = json_decode($json);
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'INSERT INTO generales(carga_viaje, factoraje, impuestos, seguro, pago_tarjeta, comision_traspaso) VALUES('.$generals->travelCharge.','.$generals->factorage.','.$generals->tax.','.$generals->safe.','.$generals->cardPay.','.$generals->pass.');');
	echo var_dump($q);
 ?>