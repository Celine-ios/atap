app.controller('spendsControl', function($scope, $http) {
	$scope.searchSpends = function() {
			$http.post('assets/php/searchSpends/index.php').then(function(response) {
				var spends = response.data;
				$scope.spends = spends;
			}, function(response) {
				alert("Ha ocurrido un error al cargar los gastos");
				return;
			});
	};

});