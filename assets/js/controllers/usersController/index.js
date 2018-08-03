app.controller('usersControl', function($scope, $http){
		$scope.show = () => {
			$http.post('assets/php/searchUsers/index.php').then(function(response) {
				var users = response.data;
				console.log(users);
				$scope.users = users;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
		};

		$scope.add = () => {
			var name = document.getElementsByName('nombre')[0].value;
			var tel = document.getElementsByName('telefono')[0].value;
			var email = document.getElementsByName('email')[0].value;
			var user = document.getElementsByName('usuario')[0].value;
			var password = document.getElementsByName('contrasena')[0].value;

			$http.post('assets/php/forms/users/add/index.php', {
				name: name,
				tel: tel,
				email: email,
				user: user,
				password: password
			}).then((response) => {
				alert("Usuario Añadidido Correctamente");
				console.log(response.data);
			}, (response) => {
				console.log(response.data);
			});
		};

	    $scope.search = () => {
	    	var name = document.getElementsByName('name')[0].value;
	    	if (name == '') {
				$scope.show();	    		
	    	}
	    	$http.post('assets/php/searchUsersFilter/index.php', {
	    		name: name
	    	}).then( response => {
	    			console.log(response.data);
	    			$scope.users = response.data;
	    	}, response => {
	    			console.log(response.data);
	    	});
	    };
});