app.controller('profileTableControl', function($scope, $http){

	$scope.setCapture = function() {
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if (ajax.status == 200 && this.readyState == 4) {
				var table = document.getElementsByClassName('profile-table')[0];
				table.innerHTML = this.responseText;		
				console.log(this.responseText);
			}
		};
		ajax.open('get', 'assets/templates/profiles/tables/capture/index.html', true);
		ajax.send();
	};

	$scope.setReports = function() {
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if (ajax.status == 200 && this.readyState == 4) {
				var table = document.getElementsByClassName('profile-table')[0];
				table.innerHTML = this.responseText;		
				console.log(this.responseText);
			}
		};
		ajax.open('get', 'assets/templates/profiles/tables/reports/index.html', true);
		ajax.send();
	};

	$scope.addProfile = () => {
		var profile = document.getElementById('addP').value;
		$http.post('assets/php/profiles/add/index.php', {
			profile: profile
		}).then((response) => {
			if (response.data == true) {
				alert('Perfil agregado Correctamente');	
			} else {
				alert('Ha habido un Problema al Agregar el Perfil, por favor intente más tarde');	
			}
		}, (response) => {
			console.log(response.data);
		});
	};
});