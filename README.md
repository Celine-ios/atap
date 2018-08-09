# Instrucciones para Rubén
## Si estás usando XAMPP:
Paso 1: Dirígete al archivo assets/php/class/database/index.php
Paso 2: Verifica que las propiedades "host", "user" y "db" estén establecidas  
a:
``` [php]
 $this->host = '127.0.0.1:3306';
 $this->user = 'root';
 $this->db = 'atap';
 ```  
 
 Si el usuario tiene contraseña, añádele a la función constructora:
 ``` [php]
 $this->password = 'tupassword';
 ```  
 Y dentro de la función con():
 ``` [php]
 function con() {
			$con = mysqli_connect($this->host, $this->user, $this->password);
			return $con;
		}
 ```  
 ## Importar la base de datos con PHPMyAdmin
 Paso 1: Busca en database/atap.sql la base de datos
 Paso 2: Impórtala


