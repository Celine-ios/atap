app.controller('workOrdersControl', ($scope, $http) => {
		$scope.show = () => {
				$http.post('assets/php/searchWorkOrders/index.php').then( response => {
				var orders = response.data;
				console.log(orders);
				$scope.orders = orders;
			}, response => {
				alert("Ha ocurrido un error al cargar las Órdenes");
				return;
			});
		};
});