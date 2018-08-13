<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM factoraje');
	$factorages = array();
	$i = 1;
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$factorage = array('pid' => $i, 'id' => $row['id'], 'orden_cuenta' => $row['orden_cuenta'], 'nombre_cliente' => $row['nombre_cliente'], 'total_servicios' => $row['total_servicios'], 'descuento' => $row['descuento'], 'total_orden' => $row['total_orden']);
		array_push($factorages, $factorage);
		$i++;
	}
	$json = json_encode($factorages);
	echo $json;
 ?>