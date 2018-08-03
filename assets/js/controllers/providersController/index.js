app.controller('providersControl', function($scope, $http) {
	$scope.sendAdd = () => {
		var name = document.getElementsByName('name')[0].value;
		var tel = document.getElementsByName('tel')[0].value;
		var address = document.getElementsByName('address')[0].value;
		var email = document.getElementsByName('email')[0].value;
		var country = document.getElementsByName('country')[0].value;
		var state = document.getElementsByName('state')[0].value;
		var con_email = document.getElementsByName('con_email')[0].value;
		var city = document.getElementsByName('city')[0].value;
		var service_type = document.getElementsByName('service_type')[0].value;
		var payway = document.getElementsByName('payway')[0].value;
		var credit_days = document.getElementsByName('credit_days')[0].value;
		var notes = document.getElementsByName('notes')[0].value;
		
		$http.post('assets/php/forms/providers/add/index.php', {
			name: name,
			tel: tel,
			address: address,
			email: email,
			country: country, 
			state: state,
			con_email: con_email,
			city: city,
			service_type: service_type,
			payway: payway,
			credit_days: credit_days,
			notes: notes

		}).then((response) => {
			alert('Proveedor Añadido Correctamente');
		}, (response) => {
			console.log(response.data);
		});
	};

	$scope.show = () => {
		$http.post('assets/php/searchProviders/index.php').then((response) => {
			$scope.providers = response.data;
			console.log(response.data);
		}, (response) => {
			console.log(response.data);
		});
	};

	$scope.search = () => {
		var name = document.getElementsByName('name')[0].value;
		var tel = document.getElementsByName('tel')[0].value;
		var contactName = document.getElementsByName('con_name')[0].value;
		if (name == '' && tel == '' && contactName == '') {
			$scope.show();
		}
			
			$http.post('assets/php/searchProvidersFilters/index.php', {
				name: name,
				tel: tel,
				cName: contactName
			}).then((response) => {
				console.log(response.data);
				$scope.providers = response.data;
			}, (response) => {
				console.log(response.data);
			});
	};
});