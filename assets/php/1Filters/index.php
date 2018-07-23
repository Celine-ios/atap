<?php 
	require_once '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$account = json_decode($json);
	if ($account->tel == '') {
	$q = 'select * from cuentas where nombre="'.$account->name.'";';
	}
	if($account->name == '') {
	$q = 'select * from cuentas where telefono='.$account->tel;
	}
	if($account->name != '' && $account->tel != '') {
	$q = 'select * from cuentas where telefono='.$account->tel.' AND nombre="'.$account->name.'";';
	}
	$qy = $database->q($con, $q);
	if ($qy) {
		$results = array();
		while($row = mysqli_fetch_array($qy, MYSQLI_BOTH)) {
		 	$result = array('nombre' => $row['nombre'], 'telefono' => $row['telefono'], 'correo' => $row['correo'], 'fecha_ingreso' => $ow['fecha_ingreso'], 'correo_contacto' => $row['correo_contacto'], 'telefono_contacto' => $row['telefono_contacto']);
		 	array_push($results, $result);
		 } 
		$json_results = json_encode($results);
		echo $json_results;
	} else {
		echo "false";
	}
 ?>