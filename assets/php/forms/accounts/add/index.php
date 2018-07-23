<?php 
	include '../../../class/database/index.php';
	$database = new Database();
	$con = $database->con();
	$sel = $database->sel($con);
	
 ?>