<?php 
	include '../../class/database/index.php';
	$json = file_get_contents('php://input');
	$profile = json_decode($json);
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'INSERT INTO perfiles(nombre_perfil) VALUES("'.$profile->profile.'")');
	echo $q;
 ?>