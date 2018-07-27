app.controller('assignProfilesControl', function($scope, $http){
	$scope.show = () => {
		var profile = document.getElementById('profileSel').value;
		alert(profile);
		$http.post('assets/php/profiles/query/index.php', {
			profile: profile
		}).then((response) => {
			$scope.assignaments = response.data;
		}, (response) => {
			console.log(response.data);
		});
	};
});