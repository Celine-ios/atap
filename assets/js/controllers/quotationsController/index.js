app.controller('quotationsControl', function($scope, $http){
	$scope.show = () => {
		$http.post('assets/php/searchQuotations/index.php').then( response => {
				var quotations = response.data;
				console.log(quotations);
				$scope.quotations = quotations;
			}, response => {
				alert("Ha ocurrido un error al cargar las Cuentas");
				return;
			});
	};
	$scope.search = () => {
		var clientName = document.getElementsByName('nombre_cliente')[0].value;
		var beginTime = document.getElementsByName('periodo_inicio')[0].value;
		var endTime = document.getElementsByName('periodo_final')[0].value;
		if (clientName == '' && beginTime == '' && endTime == '') {
			$scope.show();
		}
		$http.post('assets/php/searchQuotationsFilter/index.php', {
			clientName: clientName,
			beginTime: beginTime,
			endTime: endTime
		}).then( response => {
			console.log(response.data);
			$scope.quotations = response.data;
		}, response => {
			$scope.quotations = response.data;
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
		$scope.checkLogin();	
});