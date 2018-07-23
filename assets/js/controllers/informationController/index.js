app.controller('informationControl', function($scope, $http){
	$scope.sendInformation = () => {
		var company = document.getElementsByName('compania')[0].value;
		var address = document.getElementsByName('direccion')[0].value;
		var country = document.getElementsByName('pais')[0].value;
		var zip = document.getElementsByName('zip')[0].value;
		var state = document.getElementsByName('estado')[0].value;
		var city = document.getElementsByName('ciudad')[0].value;
		var tel = document.getElementsByName('telefono')[0].value;
		var email = document.getElementsByName('email')[0].value;

		$http.post('assets/php/forms/information/index.php', {
			nombre_compania: company,
			direccion: address,
			pais: country,
			zip: zip,
			estado: state,
			ciudad: city,
			telefono: tel,
			email: email
		})
		.then( response => {
			alert('Información Subida con Éxito');
		}, response => {
			console.log(response.data);
		});
	};
});