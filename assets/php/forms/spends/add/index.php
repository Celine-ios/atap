<?php 
	include '../../../class/database/index.php';
	$json = file_get_contents('php://input');
	$spend = json_decode($json);
	$database = new Database();
	$conn = $database->con();
	$sel = $database->sel($conn);
	$q = $database->q($conn, 'INSERT INTO gastos(tipo_servicio, proveedor, fecha_gasto, descripcion, importe, impuesto, gasto, folio, notas, comprobante) VALUES("'.$spend->serviceType.'","'.$spend->provider.'","'.$spend->spendDay.'","'.$spend->description.'","'.$spend->import.'","'.$spend->tax.'",'.$spend->spend.',"'.$spend->folio.'","'.$spend->notes.'","'.$spend->comp.'");');
	if ($q) {
		echo "true";
		return;
	} else {
		echo "false";
	}
 ?>
 