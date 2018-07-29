<?php 
	require_once '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM cuentas');
	if ($q) {
		$accounts = array();
		while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
			$account = array('nombre' => $row['nombre'], 'telefono' => $row['telefono'], 'correo' => $row['correo'], 'fecha_ingreso' => $row['fecha_ingreso'], 'correo_contacto' => $row['correo_contacto'], 'telefono_contacto' => $row['telefono_contacto']);
			array_push($accounts, $account);
		}
		$json_accounts = json_encode($accounts);
		echo $json_accounts;
	} else {
		echo 'ERROR: '.mysqli_error($con);
	}

 ?>