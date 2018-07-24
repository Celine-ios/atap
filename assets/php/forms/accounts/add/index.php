<?php 
	include '../../../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$account = json_decode($json);
	$q = $database->q($con, 'insert into cuentas(nombre, telefono, fecha_ingreso, correo, telefono_contacto, correo_contacto) values("'.$account->name.'",'.$account->tel.',"'.date('Y-m-d').'","'.$account->email.'", '.$account->con_tel.', "'.$account->con_email.'");');
	if ($q) {
		echo "true";
	} else {
		echo "false";
	}

 ?>