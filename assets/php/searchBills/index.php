<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM facturas');
	$bills = array();
	$i = 1;
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$bill = array('pid' => $i, 'id' => $row['id'], 'orden_cuenta' => $row['orden_cuenta'], 'nombre_cliente' => $row['nombre_cliente'], 'total_servicios' => $row['total_servicios'], 'comision_pago_tarjeta' => $row['comision_pago_tarjeta'], 'total_orden' => $row['total_orden']);
		array_push($bills, $bill);
		$i++;
	}
	$json = json_encode($bills);
	echo $json;
 ?>