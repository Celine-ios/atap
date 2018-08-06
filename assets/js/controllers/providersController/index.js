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

	$scope.edit = id => {
		var row = document.getElementsByTagName('tr')[id].innerHTML; // Selected Row from Table
		var limit = id * 6; // Limited Key for columns array
		var columns = []; // Columns Array
		// begin variable: Indicates key begin
		// Adding to columns array every column from begin to limit
		for (var begin = (limit - 6); begin < limit; ++begin) {
			    var column = document.getElementsByTagName('td')[begin].innerHTML;
			    columns.push(column);
		}
		// Setting up a Item Session with every selected column
		for (var i = 0; i < columns.length; ++i) {
		    //sessionStorage.setItem('column-'+i, columns[i]);
		    document.getElementsByName('column-'+i)[0].value = columns[i];
		}

	};

	$scope.processEdit = () => {
		var name = document.getElementsByName('column-0')[0].value;
		var tel = document.getElementsByName('column-1')[0].value;
		var email = document.getElementsByName('column-2')[0].value;
		var highDate = document.getElementsByName('column-3')[0].value;
		var tel_con = document.getElementsByName('column-4')[0].value;
		var email_con = document.getElementsByName('column-5')[0].value;

		$http.post('assets/php/editProviders/index.php', {
			name: name,
			tel: tel,
			email: email,
			highDate: highDate,
			tel_con: tel_con,
			email_con: email_con
		}).then(response => {
			alert("Proveedor editado Correctamente");
			console.log(response.data);
		}, response => {
			console.log(response.data);
		});
	};
});