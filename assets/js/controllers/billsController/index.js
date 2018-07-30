app.controller('billsControl', function($scope, $http) {

	// Tables
	$scope.table = 'Comisión por Pago con Tarjeta';
	$scope.changeToBills = function() {
        $scope.table = 'Comisión por Pago con Tarjeta';
	};
	$scope.changeToBilled = function() {
        $scope.table = "Descuento por Factoraje";
	};
	// Show
	$scope.show = () => {
		if($scope.table == "Descuento por Factoraje") {

			$http.post('assets/php/searchFactorage/index.php').then(function(response) {
				var factorage = response.data;
				console.log(factorage);
				$scope.results = factorage;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Facturas");
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
});
