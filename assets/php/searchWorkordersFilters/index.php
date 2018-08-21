<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json_name = file_get_contents('php://input');
	$wo = json_decode($json_name);
	$q = $database->q($con, 'SELECT * FROM ordenes_trabajo WHERE nombre_cliente="'.$wo->nombre_cliente.'";');
	$wos = array();
	$i = 1;
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$wo = array('pid' => $i, 'id' => $row['id'], 'nombre_cliente' => $row['nombre_cliente'], 'total_orden' => $row['total_orden'], 'nombre_cuenta' => $row['nombre_cuenta'], 'total_servicios' => $row['total_servicios'], 'fecha_trabajo' => $row['fecha_trabajo']);
		array_push($wos, $wo);
		$i++;
	}
	$json = json_encode($wos);
	echo $json;
 ?>