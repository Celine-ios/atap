app.controller('accountsControl', function($scope, $http){
		$scope.show = () => {
				$http.post('assets/php/searchAccounts/index.php').then(function(response) {
				var accounts = response.data;
				$scope.results = accounts;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
		};
		$scope.search = () => {
				var name = document.getElementsByName('name')[0].value;
				var tel = document.getElementsByName('tel')[0].value;
				var contactName = document.getElementsByName('cont_name')[0];				
			
			$http.post('assets/php/searchAccountsFilters/index.php', {
				name: name,
				tel: tel,
				cName: contactName
			}).then((response) => {
				console.log(response.data);
				$scope.results = response.data;
			}, (response) => {
				console.log(response.data);
			});

		};
});