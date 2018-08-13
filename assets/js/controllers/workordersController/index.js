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

});