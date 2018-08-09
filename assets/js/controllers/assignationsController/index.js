app.controller('assignationsControl', function($scope, $http){
		$scope.show = () => {
			$http.get('assets/php/searchAssignations/index.php').then( response => {
				console.log(response.data);
				$scope.assignations = response.data;
			}, response => {
				console.log(response.data);
				alert("Ha ocurrido un error al mostrar las Asignaciones");
			});
		};
		
});