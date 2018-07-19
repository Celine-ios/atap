<?php 

	class Database
	{
		
		function __construct()
		{
			$this->host = '127.0.0.1:3306';
			$this->user = 'root';
			$this->db = 'atap';
		}
		function con() {
			$con = mysqli_connect($this->host, $this->user);
			return $con;
		}
		function sel($conn) {
			$sel = mysqli_select_db($conn, $this->db);
			return $sel;
		}
		function q($con, $query) {
			$q = mysqli_query($con, $query);
			return $q; 
		}
	}
 ?>