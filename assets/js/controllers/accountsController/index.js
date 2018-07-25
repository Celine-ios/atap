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
				var contactName = document.getElementsByName('cont_name')[0].value;				
			
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

		$scope.sendAdd = () => {
			var name = document.getElementsByName('name')[0].value;
			var tel = document.getElementsByName('tel')[0].value;
			var address = document.getElementsByName('address')[0].value;
			var email = document.getElementsByName('email')[0].value;
			var country = document.getElementsByName('country')[0].value;
			var con_name = document.getElementsByName('con_name')[0].value;
			var zip = document.getElementsByName('zip')[0].value;
			var con_email = document.getElementsByName('con_email')[0].value;
			var con_tel = document.getElementsByName('con_tel')[0].value;
			var city = document.getElementsByName('city')[0].value;

			$http.post('assets/php/forms/accounts/add/index.php', {
				name: name,
				tel: tel,
				address: address,
				email: email,
				country: country,
				con_name: con_name,
				zip: zip,
				con_email: con_email,
				con_tel: con_tel,
				city: city

			}).then(response => {
				alert("La Cuenta ha sido agregada exitosamente");
			}, response => {
				console.log(response.data);
			});
		};
});