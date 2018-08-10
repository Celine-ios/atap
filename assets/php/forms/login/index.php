<?php 
	include '../../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$login = json_decode($json);
	$q = $database->q($con, 'SELECT * FROM usuarios WHERE usuario ="'.$login->user.'" AND contrasena="'.$login->pw.'";');
	$row = mysqli_fetch_array($q, MYSQLI_BOTH);
	if ($row == NULL) {
		echo "false";
	} else {
		echo "true";
	}
 ?>