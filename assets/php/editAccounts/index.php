<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$account = json_decode($json);
	$q = $database->q($con, 'UPDATE cuentas SET nombre="'.$account->name.'", telefono='.$account->tel.', correo="'.$account->email.'", fecha_ingreso="'.$account->inDate.'", telefono_contacto='.$account->tel_con.', correo_contacto="'.$account->email_con.'" WHERE correo="'.$account->email.'";');
	if ($q) {
		echo "true";
	} else {
		echo 'false';
	}
 ?>