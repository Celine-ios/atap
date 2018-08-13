<?php 
	require_once '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$billing = json_decode($json);
	$qy = $database->q($con, 'SELECT * FROM facturas WHERE orden_cuenta ="'.$billing->account.'" AND nombre_cliente="'.$billing->name.'"');
	if ($qy) {
		$results = array();
		$i = 1;
		while($row = mysqli_fetch_array($qy, MYSQLI_BOTH)) {
		 	$result = array('pid' => $i, 'id' => $row['id'], 'orden_cuenta' => $row['orden_cuenta'], 'nombre_cliente' => $row['nombre_cliente'], 'total_servicios' => $row['total_servicios'], 'comision_pago_tarjeta' => $row['comision_pago_tarjeta'], 'total_orden' => $row['total_orden']);
		 	array_push($results, $result);
		 	$i++;
		 } 
		$json_results = json_encode($results);
		echo $json_results;
	} else {
		echo "false";
	}
 ?>