<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM proveedores;');
	$providers = array();
	$i = 1;
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
			$provider = 'nombre' => $row['nombre'];
			array_push($providers, $provider);
			$i++;
	}
	$json = json_encode($providers);
	echo $json;
 ?>