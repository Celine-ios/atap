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
