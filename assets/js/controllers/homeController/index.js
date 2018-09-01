app.controller('homeControl', function($scope) {
		$scope.checkTime = () => {
			setInterval(() => {
			alert('Tiempo Máximo de Inactividad Alcanzado\nVuelva a Iniciar Sesión');
			location.href = "#!";
			}, 900000);
		};
		$scope.checkLogin = () => {
			if (!sessionStorage.getItem('user') || !sessionStorage.getItem('pw')) {
				document.getElementById('menu').style.display = 'none';
				location.href = "#!error";
			} else {
				return;
			}
		};
		$scope.checkLogin();
		$scope.checkTime();
});