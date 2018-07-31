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
});