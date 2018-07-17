app.controller('billsControl', function($scope, $http) {
	$scope.table = 'Comisión por Pago con Tarjeta';
	$scope.changeToBills = function() {
        $scope.table = 'Comisión por Pago con Tarjeta';
	};
	$scope.changeToBilled = function() {
        $scope.table = "Descuento por Factoraje";
	};
});
