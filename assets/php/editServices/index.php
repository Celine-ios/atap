<?php 
	require '../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	$json = file_get_contents('php://input');
	$spends = json_decode($json);
	$q = $database->q($con, 'UPDATE gastos SET tipo_servicio="'.$spends->serviceType.'", proveedor="'.$spends->provider.'", fecha_gasto="'.$spends->spendDay.'", descripcion="'.$spends->description.'", importe="'.$spends->import.'", impuesto="'.$spends->tax.'", gasto='.$spends->spend.', folio="'.$spends->folio.'", notas="'.$spends->notes.'", comprobante="'.$spends->comp.'", WHERE folio="'.$spends->folio.'";');
	if ($q) {
		echo "true";
	} else {
		echo 'false';
	}
 ?>