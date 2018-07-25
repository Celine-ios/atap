<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM proveedores');
	$providers = array();
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
			$provider = array('nombre' => $row['nombre'], 'telefono' => $row['telefono'], 'correo' => $row['correo'], 'fecha_alta' => $row['fecha_alta'], 'telefono_contacto' => $row['telefono_contacto'], 'correo_contacto' => $row['correo_contacto']);
			array_push($providers, $provider);
	}
	$json = json_encode($providers);
	echo $json;
 ?>