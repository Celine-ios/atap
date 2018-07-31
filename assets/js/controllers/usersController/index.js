app.controller('usersControl', function($scope, $http){
		$scope.show = () => {
			$http.post('assets/php/searchUsers/index.php').then(function(response) {
				var accounts = response.data;
				console.log(accounts);
				$scope.results = accounts;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
		};
		$scope.add = () => {
			$http.post('assets/php/forms/users/add/index.php', {
				name: name,
				tel: tel,
				email: email,
				inDay: inDay,
				user: user,
				password: password
			}).then((response) => {
				alert("Usuario Añadidido Correctamente");
				console.log(response.data);
			}, (response) => {
				console.log(response.data);
			});
		};
});