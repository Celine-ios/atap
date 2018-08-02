<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * from asignaciones');
	$assignations = array();
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$assignation = array('id_orden' => $row['id_orden'], 'fecha_trabajo' => $row['fecha_trabajo'], 'nombre' => $row['nombre'], 'cliente' => $row['cliente'], 'telefono' => $row['telefono'], 'nombre_contacto' => $row['nombre_contacto'], 'telefono_contacto' => $row['telefono_contacto'], 'estado' => $row['estado']);
		array_push($assignations, $assignation);
	}
	$json = json_encode($assignations);
	echo $json;
 ?>