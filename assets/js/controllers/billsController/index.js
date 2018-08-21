app.controller('billsControl', function($scope, $http) {

	$scope.signed = '#editBilling';
	$scope.search = 'searchBilling();';
	// Tables
	$scope.table = 'Comisión por Pago con Tarjeta';
	
	$scope.changeToBills = function() {
        $scope.table = 'Comisión por Pago con Tarjeta';
        $scope.signed = '#editBilling';
        $scope.search = 'searchBilling();';
        $scope.results = '';
	};
	$scope.changeToBilled = function() {
        $scope.table = "Descuento por Factoraje";
        $scope.signed = '#editFactorage';
        $scope.results = '';
        $scope.search = 'searchFactorage();';
	};
	// Show
	$scope.show = () => {
		if($scope.table == "Descuento por Factoraje") {

			$http.post('assets/php/searchFactorage/index.php').then(function(response) {
				var factorage = response.data;
				console.log(factorage);
				$scope.results = factorage;
			}, function(response) {
				alert("Ha ocurrido un error al cargar el Factoraje");
				return;
			});
			
		} else {
			$http.post('assets/php/searchBills/index.php').then(function(response) {
				var bills = response.data;
				console.log(bills);
				$scope.results = bills;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Facturas");
				return;
			});

		}
	};

	$scope.add = () => {
		if ($scope.table == 'Descuento por Factoraje') {
			location.href = "#!agregar-factoraje";
		} else {
			location.href = "#!agregar-factura";
		}
	};

	$scope.addBilling = () => {
		var cuenta = document.getElementsByName('orden_cuenta')[0].value;
		var nombre_cliente = document.getElementsByName('nombre_cliente')[0].value;
		var total_servicios = document.getElementsByName('total_servicios')[0].value;
		var comision_tarjeta = document.getElementsByName('tarjeta')[0].value;
		var total_orden = document.getElementsByName('total_orden')[0].value;

			$http.post('assets/php/addBilling/index.php', {
				cuenta: cuenta,
				nombre_cliente: nombre_cliente,
				total_servicios: total_servicios,
				comision_tarjeta: comision_tarjeta,
				total_orden: total_orden
			}).then(response => {
				console.log(response.data);
			}, response => {
				console.log(response.data);
			});
	};

	$scope.addFactorage = () => {
		var cuenta = document.getElementsByName('orden_cuenta')[0].value;
		var nombre_cliente = document.getElementsByName('nombre_cliente')[0].value;
		var total_servicios = document.getElementsByName('total_servicios')[0].value;
		var descuento_factoraje = document.getElementsByName('desc_factoraje')[0].value;
		var total_orden = document.getElementsByName('total_orden')[0].value;

			$http.post('assets/php/addFactorage/index.php', {
				cuenta: cuenta,
				nombre_cliente: nombre_cliente,
				total_servicios: total_servicios,
				descuento_factoraje: descuento_factoraje,
				total_orden: total_orden
			}).then(response => {
				console.log(response.data);
			}, response => {
				console.log(response.data);
			});
	};

	$scope.edit = id => {
		var row = document.getElementsByTagName('tr')[id].innerHTML; // Selected Row from Table
		var limit = id * 6; // Limited Key for columns array
		var columns = []; // Columns Array
		// begin variable: Indicates key begin
		// Adding to columns array every column from begin to limit
		for (var begin = (limit - 6); begin < limit; ++begin) {
			    var column = document.getElementsByTagName('td')[begin].innerHTML;
			    columns.push(column);
		}
		// Setting up a Item Session with every selected column
		for (var i = 0; i < columns.length; ++i) {
		    //sessionStorage.setItem('column-'+i, columns[i]);
		    document.getElementsByName('column-'+i)[0].value = columns[i];
		}

	};

	$scope.processEdit = () => {
		var id = document.getElementsByName('column-0')[0].value;
		var orden_cuenta = document.getElementsByName('column-1')[0].value;
		var nombre_cliente = document.getElementsByName('column-2')[0].value;
		var total_servicios = document.getElementsByName('column-3')[0].value;
		var comision_tarjeta = document.getElementsByName('column-4')[0].value;
		var total_orden = document.getElementsByName('column-5')[0].value;

		$http.post('assets/php/editBilling/index.php', {
			orden_cuenta: orden_cuenta,
			nombre_cliente: nombre_cliente,
			total_servicios: total_servicios,
			comision_tarjeta: comision_tarjeta,
			total_orden: total_orden,
			id: id
		}).then(response => {
			alert("Factura editada Correctamente");
			console.log(response.data);
		}, response => {
			console.log(response.data);
		});
	};

	$scope.search = () => {
			var account = document.getElementsByName('account')[0].value;
			var name = document.getElementsByName('name')[0].value;
			var startDate = document.getElementsByName('startDate')[0].value;
			var endDate = document.getElementsByName('endDate')[0].value;

		if (account == '' || name == '' || startDate == '' || endDate == '') {
			alert('Complete todos los campos de Búsqueda');
			return;
		} 
			$http.post('assets/php/searchBillingFilters/index.php', {
				account: account,
				name: name,
				startDate: startDate,
				endDate: endDate
			}).then(response => {
				console.log(response.data);
			}, response => {
				console.log(response.data);
			});
	};

	$scope.pdf = () => {
		var columns;
		if ($scope.table == 'Comisión por Pago con Tarjeta') {
			columns = ["ID", "Orden de la Cuenta", "Nombre del Cliente", "Total de Servicios", 'Comisión por Pago con Tarjeta', 'Total de la Orden'];
		} else {
			columns = ["ID", "Orden de la Cuenta", "Nombre del Cliente", "Total de Servicios", 'Descuento Por Factoraje', 'Total de la Orden'];
		}
		var rowsNumber = document.getElementsByName('billsTable')[0].rows.length;
		var limit = (rowsNumber -1) * 6;
		var rows = [];
		for (var i = 0; i < limit; i++) {
			var td = document.getElementsByTagName('td')[i].innerHTML;
				rows.push(td);
		}
		j = 0;
		var filas = [];
		while(j < limit) {
			var row = [rows[j], rows[j+1], rows[j+2], rows[j+3], rows[j+4], rows[j+5]];
			filas.push(row);
			j += 6;
		}
		console.log(filas);
			var doc = new jsPDF('p', 'pt');
			doc.text(220, 40, 'ATAP COMPANY');
			doc.text(230, 60, '& Installations');
			//doc.addImage('assets/media/images/logo.png', 'PNG', 10, 10, 50, 50);
			// Get In Here
			// file:///C:/Users/PC/AppData/Local/Temp/Rar$EXa5784.45467/jsPDF-1.3.2/examples/basic.html
			doc.setFontSize(6);
			doc.text(260, 80, 'Dirección Empresa');
			doc.text(250, 90, 'Phone: TELEFONO, Fax: FAX');
			doc.text(260, 100, 'usuario@dominio.com');
			doc.setFontSize(10);
			doc.text(40, 160, 'SELLER/COORDINATOR:');
			doc.text(360, 160, 'ISSUED ON:');
			doc.setFontType('bold');
			doc.setFont("courier");
			doc.text(160, 200, 'BILLTO');
			doc.text(400, 200, 'CUSTOMER');
			doc.setFontType('bold');
			doc.setFont('helvetica');
			doc.text(40, 240, 'NAME: ');
			doc.text(360, 240, 'NAME: ');
			doc.text(40, 260, 'ADDRESS: ');
			doc.text(360, 260, 'ADDRESS: ');
			doc.setFont("courier");
			doc.text(235, 300, 'JOB INFORMATION');
			doc.setFontType('bold');
			doc.setFont('helvetica');
			doc.text(40, 340, 'JOB LOCATION: ');
			doc.text(360, 340, 'JOB DATE AND TIME: ');
			doc.text(40, 360, 'INDICATIONS: ');
			doc.autoTable(columns, filas, {
				margin: {
					top: 380
				}
			});
			doc.setFontSize(5);
			doc.text(40, 710,'Important: * Crating based upon: (1) Items with less than 3" depth use 6" depth crate with'); 
			doc.text(40, 720,'additional 4" for length and width. (2) Items with 3 1/2" to 6" depth use 8" depth  crate and');
			doc.text(40, 730,'additional 4" to length and width. (3) Items more than 6" deep add 4" to length, width & depth.When estimating');
			doc.text(40, 740, 'plywood or heat treated lumber crate, will add $2.00 per cubic feet. * Minimum Service Charge per Invoice $75.00 * Amount');
			doc.text(40, 750, 'showed as total apply only if the payment is made by check or cash');
			doc.setTextColor(255,0,0);
			doc.text(40, 760, 'By signing this document I agree to pay the amount showed in this QUOTE / INVOICE in full to ATAP INC.');
			doc.setTextColor(0,0,0);
			doc.text(40, 800, '------------------');
			doc.text(40, 810, 'PRINT NAME');
			doc.text(150, 800, '------------------');
			doc.text(150, 810, 'SIGINATURE');
			doc.text(260, 800, '------------------');
			doc.text(270, 810, 'DATE');
			doc.setFontSize(6);
			doc.text(400, 710,'SUBTOTAL: $');
			doc.text(400, 730,'INSURANCE: $');
			doc.text(400, 750,'TAX: $');
			doc.text(400, 770,'TRIP CHARGE: $');
			doc.text(400, 790,'COM. BY CARD: $');
			doc.text(400, 810,'PAY BY CARD: $');
			var d = new Date(); 
			var date = d.getUTCFullYear() + '' + (d.getUTCMonth() + 1) + '' + d.getUTCDate();
			var folio = prompt('Inserte Folio: ', '(Alfanumérico)');
			doc.save(date + '_'+ folio + '.pdf');

	};

	$scope.checkLogin = () => {
			if (!sessionStorage.getItem('user') || !sessionStorage.getItem('pw')) {
				document.getElementById('menu').style.display = 'none';
				location.href = "#!error";
			} else {
				return;
			}
		};
		$scope.checkLogin();
});
