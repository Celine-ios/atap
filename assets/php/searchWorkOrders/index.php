<?php 
	require_once '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM ordenes_trabajo');
	if ($q) {
		$workorders = array();
		while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
			$workorder = array('id' => $row['id'], 'nombre_cuenta' => $row['nombre_cuenta'], 'nombre_cliente' => $row['nombre_cliente'], 'fecha_trabajo' => $row['fecha_trabajo'], 'total_servicios' => $row['total_servicios'], 'total_orden' => $row['total_orden']);
			array_push($workorders, $workorder);
		}
		$json_workorders = json_encode($workorders);
		echo $json_workorders;
	} else {
		echo 'ERROR: '.mysqli_error($con);
	}

 ?>