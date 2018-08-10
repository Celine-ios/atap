app.controller('loginControl', function($scope, $http) {
	$scope.checkMenu = () => {
		if (location.hash == '#!/') {
			document.getElementById('menu').style.display = 'none';
		}
	};
	$scope.send = () => {
		var user = document.getElementsByName('user')[0].value;
		var pw = document.getElementsByName('password')[0].value;

		$http.post('assets/php/forms/login/index.php', {
				user: user,
				pw: pw
		}).then(response => {
			if (response.data == 'false') {
				$scope.badLogin = 'La Información es incorrecta';
			} else {
				if (response.data == 'true') {
					sessionStorage.setItem('user', user);
					sessionStorage.setItem('pw', pw);
					document.getElementById('menu').style.display = 'block';			
					location.href="#!home";
				}
			}
		}, response => {
			console.log(response.data);
		});
	};
	$scope.checkMenu();
});