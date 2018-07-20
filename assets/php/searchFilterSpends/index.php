<?php 
	include '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$filter = json_decode($json);
	$q = $database->q($con, 'SELECT * FROM gastos WHERE fecha_gasto BETWEEN "'.$filter->fechaInicial.'" AND "'.$filter->fechaFinal.'" AND proveedor="'.$filter->proveedor.'" AND tipo_servicio="'.$filter->tipoServicio.'";');
	$spends = array();
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$spend = array('tipo_servicio' => $row['tipo_servicio'], 'proveedor' => $row['proveedor'], 'fecha_gasto' => $row['fecha_gasto'], 'descripcion' => $row['descripcion'], 'importe' => $row['importe'], 'impuesto' => $row['impuesto'], 'gasto' => $row['gasto'], 'folio' => $row['folio']);
		array_push($spends, $spend);
	}
	$spends_json = json_encode($spends);
	echo $spends_json;

 ?>