<?php 
	include '../../class/database/index.php';
	$json = file_get_contents('php://input');
	$profile = json_decode($json);
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM asignaciones_perfiles WHERE asignado_a="'.$profile->profile.'";');
	$assignaments = array();
	while ($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$assignament = array('id' => $row['id'], 'nombre' => $row['nombre'], 'compania' => $row['compania'], 'puesto' => $row['puesto'], 'fecha_ingreso' => $row['fecha_ingreso']);
		array_push($assignaments, $assignament);
	}
	$json_a = json_encode($assignaments);
	echo $json_a;
 ?>