<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json_name = file_get_contents('php://input');
	$user = json_decode($json_name);
	$q = $database->q($con, 'SELECT * FROM usuarios WHERE nombre="'.$user->name.'";');
	$users = array();
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$user = array('id' => $row['id'], 'nombre' => $row['nombre'], 'telefono' => $row['telefono'], 'correo' => $row['correo'], 'fecha_ingreso' => $row['fecha_ingreso'], 'usuario' => $row['usuario'], 'contrasena' => $row['contrasena']);
		array_push($users, $user);
	}
	$json = json_encode($users);
	echo $json;
 ?>