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
		var serviceType = document.getElementsByName('serviceType')[0].value;
		var provider = document.getElementsByName('provider')[0].value;
		var spendDate = document.getElementsByName('spendDate')[0].value;
		var description = document.getElementsByName('description')[0].value;
		var importe = document.getElementsByName('import')[0].value;
		var tax = document.getElementsByName('tax')[0].value;
		var spend = document.getElementsByName('spend')[0].value;
		var folio = document.getElementsByName('folio')[0].value;
		var notes = document.getElementsByName('notes')[0].value;

		if (document.getElementsByName('check')[0].files[0]) {
				var file = document.getElementsByName('check')[0].files[0];    
				var filename = file.name;
				var checkf = filename.indexOf('pdf');
				if (checkf == -1) {
				  alert("El formato debe ser PDF");
				  return;  
				} 
			} else {
				var filename = 'NO';
			}

		$http.post('assets/php/editSpends/index.php', {
			serviceType: serviceType,
			provider: provider,
			spendDate: spendDate,
			description: description,
			import: importe,
			tax: tax,
			spend: spend,
			folio: folio,
			notes: notes,
			comp: filename
		}).then((response) => {
			if(response.data == 'true') {
				alert("Gasto editado Correctamente");
			}

		}, (response) => {
			console.log(response.data);
		});
	};

	$scope.setValues = () => {
		var fecha, folio, proveedor, servicio, gasto, impuesto, importe;
		fecha = sessionStorage.getItem('column-0');
		folio = sessionStorage.getItem('column-1');
		proveedor = sessionStorage.getItem('column-2');
		servicio = sessionStorage.getItem('column-3');
		gasto = sessionStorage.getItem('column-4');
		impuesto = sessionStorage.getItem('column-5');
		importe = sessionStorage.getItem('column-6');

		document.getElementsByName('serviceType')[0].value = servicio;
		document.getElementsByName('provider')[0].value = proveedor;
		document.getElementsByName('spendDate')[0].value = fecha;
		document.getElementsByName('import')[0].value = importe;
		document.getElementsByName('tax')[0].value = impuesto;
		document.getElementsByName('spend')[0].value = gasto;
		document.getElementsByName('folio')[0].value = folio;
		
	};
	if(location.hash == '#!/editar-gastos') {
    	$scope.setValues();
	}
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