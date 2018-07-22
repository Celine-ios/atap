app.controller('profileTableControl', function($scope){

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
});