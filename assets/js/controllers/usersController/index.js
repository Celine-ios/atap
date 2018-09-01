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

	    $scope.edit = id => {
		var row = document.getElementsByTagName('tr')[id].innerHTML; // Selected Row from Table
		var limit = id * 7; // Limited Key for columns array
		var columns = []; // Columns Array
		// begin variable: Indicates key begin
		// Adding to columns array every column from begin to limit
		for (var begin = (limit - 7); begin < limit; ++begin) {
			    var column = document.getElementsByTagName('td')[begin].innerHTML;
			    columns.push(column);
		}
		// Setting up a Item Session with every selected column
		for (var i = 0; i < columns.length; ++i) {
		    //sessionStorage.setItem('column-'+i, columns[i]);
		    document.getElementsByName('column-'+i)[0].value = columns[i];
		}

		};

		/*$scope.setDate = () => {
			var d = new Date(); 
			var date = d.getUTCFullYear() + '' + (d.getUTCMonth() + 1) + '' + d.getUTCDate();
			document.getElementById('inDate').value = date;
		};*/

		$scope.checkLogin = () => {
			if (!sessionStorage.getItem('user') || !sessionStorage.getItem('pw')) {
				document.getElementById('menu').style.display = 'none';
				location.href = "#!error";
			} 
		};
		//$scope.setDate();
		$scope.checkLogin();
});