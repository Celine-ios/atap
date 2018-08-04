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
		    sessionStorage.setItem('column-'+i, columns[i]);
		}
		location.href="#!editar-gastos";
	};

	$scope.processEdit = () => {

		$http.post('assets/php/editServices/index.php', {
			serviceType: serviceType,
			provider: provider,
			spendDate: spendDate,
			description: description,
			import: importe,
			tax: tax,
			spend: spend,
			folio: folio,
			notes: notes,
			comp: comp
		}).then((response) => {
			console.log(response.data);
		}, (response) => {

		});
	};
	
});