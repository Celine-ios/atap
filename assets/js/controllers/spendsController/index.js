app.controller('spendsControl', function($scope, $http) {
	$scope.searchSpends = function() {
			$http.post('assets/php/searchSpends/index.php').then(function(response) {
				var spends = response.data;
				$scope.spends = spends;
				console.log(response.data);
			}, function(response) {
				alert("Ha ocurrido un error al cargar los gastos");
				return;
			});
	};
	$scope.searchFilter = function() {
		var proveedor = document.getElementsByName('proveedor')[0].value;
		var tipoServicio = document.getElementsByName('tipo_servicio')[0].value;
		var fechaInicial = document.getElementsByName('periodo_inicio')[0].value;
		var fechaFinal = document.getElementsByName('periodo_final')[0].value;
		//alert(proveedor+', '+tipoServicio+', '+fechaInicial+ ', '+fechaFinal);
		if(proveedor == '' && tipoServicio == '' && fechaInicial == '' && fechaFinal == '') {
			$scope.searchSpends();
		}
		$http.post('assets/php/searchFilterSpends/index.php', {
			proveedor: proveedor,
			tipoServicio: tipoServicio,
			fechaInicial: fechaInicial,
			fechaFinal: fechaFinal
		}).then(function(response) {
			$scope.spends = response.data;
		}, function(response) {
			console.log(response);
		});
	};
	$scope.edit = id => {
		var row = document.getElementsByTagName('tr')[id].innerHTML;
		var limit = id * 7;
		if (id == 1) {
			var columns = [];
		for (var begin = (limit - 7); begin < limit; ++begin) {
			    var column = document.getElementsByTagName('td')[begin].innerHTML;
			    columns.push(column);
		}
		}
		else {

			var limit = id * 7;
			var columns = [];
			for (var begin = (limit - 7); begin < limit; ++begin) {
				var column = document.getElementsByTagName('td')[begin].innerHTML;
			    columns.push(column);

		}	
		}
		
		for (var i = 0; i < columns.length; ++i) {
			console.log(columns[i]);
		}

	};
	
});