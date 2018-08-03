<?php 
	require_once '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$q = $database->q($con, 'SELECT * FROM gastos;');
	$spends = array();
	$i = 1;
	while($row = mysqli_fetch_array($q, MYSQLI_BOTH)) {
		$spend = array('id' => $i, 'tipo_servicio' => $row['tipo_servicio'], 'proveedor' => $row['proveedor'], 'fecha_gasto' => $row['fecha_gasto'], 'descripcion' => $row['descripcion'], 'importe' => $row['importe'], 'impuesto' => $row['impuesto'], 'gasto' => $row['gasto'], 'folio' => $row['folio'], 'notas' => $row['notas'], 'comprobante' => $row['comprobante']);
		array_push($spends, $spend);
		$i++;
	}
	$spends_json = json_encode($spends);
	echo $spends_json;
 ?>