app.controller('quotationsControl', function($scope, $http){
	$scope.show = () => {

		$http.post('assets/php/searchQuotations/index.php').then( response => {
				var quotations = response.data;
				console.log(quotations);
				$scope.quotations = quotations;
			}, response => {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
	};
	$scope.search = () => {
		var clientName = document.getElementsByName('nombre_cliente')[0].value;
		var beginTime = document.getElementsByName('periodo_inicio')[0].value;
		var endTime = document.getElementsByName('periodo_final')[0].value;

		if (clientName == '' && beginTime == '' && endTime == '') {
			$scope.show();
		}

		$http.post('assets/php/searchQuotationsFilter/index.php', {
			clientName: clientName,
			beginTime: beginTime,
			endTime: endTime
		}).then( response => {
			console.log(response.data);
			$scope.quotations = response.data;
		}, response => {
			$scope.quotations = response.data;
		});
	};
	$scope.add = () => {
		var cuenta = document.getElementsByName('cuenta')[0].value;
		var nombre_cliente = document.getElementsByName('nombre_cliente')[0].value;
		var total_servicios = document.getElementsByName('total_servicios')[0].value;
		var total_orden = document.getElementsByName('total_orden')[0].value;
		var comision_pago_tarjeta = document.getElementsByName('com_pago_tarjeta')[0].value;

		$http.post('assets/php/addQuotations/index.php', {
			cuenta: cuenta,
			nombre_cliente: nombre_cliente,
			total_servicios: total_servicios,
			total_orden: total_orden,
			comision_pago_tarjeta: comision_pago_tarjeta
		}).then(response => {
			console.log(response.data);
		}, response => {
			console.log(response.data);
		});
	};

	$scope.pdf = () => {
		var rowsNumber = document.getElementsByName('quotationsTable')[0].rows.length;
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
			var columns = ["ID", "Nombre de la Cuenta", "Nombre del Cliente", "Total de Servicios", 'Total de la Orden', 'Comisión por Pago de la Orden'];
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
			} 
	};
	$scope.searchAccounts = () => {
				$http.post('assets/php/searchAccounts/index.php').then(function(response) {
				var accounts = response.data;
				console.log(accounts);
				$scope.accounts = accounts;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
	};
	$scope.searchAccounts();
	$scope.checkLogin();	
});