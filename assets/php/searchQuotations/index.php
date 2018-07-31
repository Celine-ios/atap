<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM cotizaciones');
	$quotations = array();
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$quote = array('id' => $row['id'], 'nombre_cuenta' => $row['nombre_cuenta'], 'nombre_cliente' => $row['nombre_cliente'], 'total_servicios' => $row['total_servicios'], 'comision_pago_tarjeta' => $row['comision_pago_tarjeta'], 'total_orden' => $row['total_orden']);
		array_push($quotations, $quotes);
	}
	$json = json_encode($quotations);
	echo $json;
 ?>