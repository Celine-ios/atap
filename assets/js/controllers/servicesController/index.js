app.controller('servicesControl', function($scope, $http){
		$scope.show = () => {
				$http.post('assets/php/searchServices/index.php').then(function(response) {
				var services = response.data;
				console.log(services);
				$scope.services = services;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
		};

		$scope.search = () => {

		};

		$scope.add = () => {
			var name = document.getElementsByName('nombre')[0].value;
			var type = document.getElementsByName('tipo_servicio')[0].value;
			var description = document.getElementsByName('descripcion')[0].value;
			var price = document.getElementsByName('precio')[0].value;
			var price2 = document.getElementsByName('precio')[0].value;

				$http.post('assets/php/forms/services/add/index.php', {
					name: name,
					type: type,
					description: description,
					price: price,
					price2: price2
				}).then(function(response) {
					console.log(response.data);
					alert('Servicio Añadido Correctamente');
			}, function(response) {
				alert("Ha ocurrido un error al cargar los Servicios");
				return;
			});
		};

		$scope.checkLogin = () => {
			if (!sessionStorage.getItem('user') || !sessionStorage.getItem('pw')) {
				document.getElementById('menu').style.display = 'none';
				location.href = "#!error";
			} else {
				return;
			}
		};
		$scope.searchAccounts = () => {
			$http.post('assets/php/searchAccounts/index.php').then(function(response) {
				var accounts = response.data;
				console.log(accounts);
				$scope.accounts = accounts;
			}, function(response) {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
		};
		$scope.searchAccounts();
		$scope.show();
		$scope.checkLogin();
		
});