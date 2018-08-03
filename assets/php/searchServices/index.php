<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * from servicios');
	$assignations = array();
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$assignation = array('tipo' => $row['tipo'], 'nombre' => $row['nombre'], 'descripcion' => $row['descripcion'], 'costo' => $row['costo'], 'precio' => $row['precio']);
		array_push($assignations, $assignation);
	}
	$json = json_encode($assignations);
	echo $json;
 ?>