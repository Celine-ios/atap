app.controller('workOrdersControl', ($scope, $http) => {
		$scope.show = () => {
				$http.post('assets/php/searchWorkOrders/index.php').then(response => {
				var orders = response.data;
				console.log(orders);
				$scope.orders = orders;
			}, response => {
				alert("Ha ocurrido un error al cargar las Órdenes");
				return;
			});
		};
		$scope.add = () => {
			var nombre_cuenta = document.getElementsByName('nombre_cuenta')[0].value;
			var nombre_cliente = document.getElementsByName('nombre_cliente')[0].value;
			var fecha_trabajo = document.getElementsByName('fecha_trabajo')[0].value;
			var total_servicios = document.getElementsByName('total_servicios')[0].value;
			var total_orden = document.getElementsByName('total_orden')[0].value;

				$http.post('assets/php/addWorkorder/index.php', {
					accountName: nombre_cuenta,
					clientName: nombre_cliente,
					workDate: fecha_trabajo,
					servicesTotal: total_servicios,
					orderTotal: total_orden
				}).then((response) => {
					console.log(response.data);
				}, (response) => {
					console.log(response.data);
				});
		};
		$scope.search = () => {
			var nombre_cliente = document.getElementsByName('cliente_filtro')[0].value;
			if (nombre_cliente == '') {
				$scope.show();
			}

				$http.post('assets/php/searchWorkOrdersFilters/index.php', {
					nombre_cliente: nombre_cliente
				}).then((response) => {
					console.log(response.data);
					$scope.orders = response.data;
				}, response => {
					console.log(response.data);
				}); 
					
		};

		$scope.pdf = () => {
		var rowsNumber = document.getElementsByName('woTable')[0].rows.length;
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
			var columns = ["ID", "Nombre de la Cuenta", "Nombre del Cliente", "Fecha del Trabajo", 'Total de Servicios', 'Total de la Orden'];
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
			doc.text(150, 700, 'Once the present work order has been signed, ATAP COMPANY& installations of any liability and claim for damages or ');
			doc.text(210, 710, 'losses. I confirm that I have received the requested services from full satisfaction.');
			doc.setFontSize(6);
			doc.text(260, 730, 'I ACCEPT CONFORMITY');
			doc.text(140, 780, '---------------------------------------');
			doc.text(160, 790, 'PRINT NAME');
			doc.text(260, 780, '---------------------------------------');
			doc.text(280, 790, 'SIGNATURE');
			doc.text(380, 780, '---------------------------------------');
			doc.text(410, 790, 'DATE');
			var d = new Date(); 
			var date = d.getUTCFullYear() + '' + (d.getUTCMonth() + 1) + '' + d.getUTCDate();
			var folio = prompt('Inserte Folio: ', '(Alfanumérico)');
			doc.save(date + '_'+ folio + '.pdf');
	};

	/*
		Charging Accounts for search selector
	*/
	$scope.searchAccounts = () => {
		$http.post('assets/php/searchAccounts/index.php').then(function(response) {
				var accounts = response.data;
				console.log(accounts);
				$scope.results = accounts;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
	};

	$scope.searchAccounts();

});