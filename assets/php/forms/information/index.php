<?php 
	require_once '../../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$informacion = json_decode($json);
	$q = $database->q($con, 'INSERT INTO informaciones(nombre_compania, direccion, pais, zip, estado, ciudad, telefono, correo) VALUES ("'.$informacion->nombre_compania.'","'.$informacion->direccion.'","'.$informacion->pais.'",'.$informacion->zip.',"'.$informacion->estado.'","'.$informacion->ciudad.'",'.$informacion->telefono.',"'.$informacion->email.'")');
	if ($q) {
		return true;
	} else {
		return false;
	}
 ?>