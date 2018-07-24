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
			
		}).then((response) => {
			console.log(response.data);
		}, (response) => {
			console.log(response.data);
		});
	};
});