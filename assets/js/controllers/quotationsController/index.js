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
		alert('2');
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
	/*$scope.checkLogin = () => {
			if (!sessionStorage.getItem('user') || !sessionStorage.getItem('pw')) {
				document.getElementById('menu').style.display = 'none';
				location.href = "#!error";
			} 
		};
		$scope.checkLogin();	*/
});