app.controller('generalsControl', function($scope, $http){
		$scope.send = () => {
			var travelCharge = document.getElementsByName('carga_viaje')[0].value;
			var factorage = document.getElementsByName('factoraje')[0].value;
			var tax = document.getElementsByName('impuestos')[0].value;
			var safe = document.getElementsByName('seguro')[0].value;
			var cardpay = document.getElementsByName('pago_tarjeta')[0].value;
			var pass = document.getElementsByName('comision_traspaso')[0].value;
				$http.post('assets/php/forms/generals/index.php', {
					travelCharge: travelCharge,
					factorage: factorage,
					tax: tax,
					safe: safe,
					cardPay: cardpay,
					pass: pass
				}).then((response) => {
					alert("Generales actualizados Correctamente");
					console.log(response.data);
				}, (response) => {
					console.log(response.data);
				});
		};
});