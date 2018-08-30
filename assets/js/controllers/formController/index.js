app.controller('formControl', function($scope, $http){
		$scope.send = function(event, type) {
			switch(type) {
				case 'spends-add':
			var spendDay = document.getElementsByName('spendDay')[0].value;
			var serviceType = document.getElementsByName('serviceType')[0].value;
			var provider = document.getElementsByName('provider')[0].value;
			var description = document.getElementsByName('description')[0].value;
			var importe = document.getElementsByName('import')[0].value;
			var tax = document.getElementsByName('tax')[0].value;
			var spend = document.getElementsByName('spend')[0].value;
			var folio = document.getElementsByName('folio')[0].value;
			var notes = document.getElementsByName('notes')[0].value;

			var d = new Date(); 

			var date = d.getUTCMonth() < 10 ? d.getUTCFullYear() + '-0' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate() : d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate();

			console.log(date);
			console.log(spendDay);
			if(date < spendDay) {
				alert('La fecha introducida es mayor que la de hoy');
				return;
			}
			
			if (document.getElementsByName('file')[0].files[0]) {
				var file = document.getElementsByName('file')[0].files[0];    
				var filename = file.name;
				var checkf = filename.indexOf('pdf');
				if (checkf == -1) {
				  alert("El formato debe de ser PDF");
				  return;  
				} 
			}

			$http.post('assets/php/forms/spends/add/index.php', {
				spendDay: spendDay,
				serviceType: serviceType,
				provider: provider,
				description: description,
				import: importe,
				tax: tax,
				spend: spend,
				folio: folio,
				notes: notes,
				comp: filename

			}).then(function(response) {
				
				  	alert("Se ha agregado el gasto correctamente");
				  	location.href = '#!consultar-gastos';  
				  	console.log(response);
				 
			},function(response) {
				console.log(response);
			});
			break;

			}

};	

$scope.searchProviders = () => {
	$http.get('assets/php/searchProviders/index.php').then((response) => {
		response.data.forEach((provider) => {
		  document.getElementsByName('provider')[0].innerHTML += '<option value="'+ provider.nombre +'">'+ provider.nombre +'</option>';
		});
	}, (response) => {
		console.log(response);
	});

	setInterval(() => {
	  	var taxVal = document.getElementsByName('tax')[0].value;
	  	var importVal = document.getElementsByName('import')[0].value;
	  		document.getElementsByName('spend')[0].value = importVal - taxVal;
	}, 1000);
};
	$scope.searchProviders();
		
});