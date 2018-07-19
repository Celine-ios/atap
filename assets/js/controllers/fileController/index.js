app.controller('fileControl', function($scope) {
	$scope.checkFormat = function(evt) {
		alert("Hello");
		alert(file);
		/*var format = evt.target.files[0];
		alert(format.name);
		alert($scope.file);*/
	};
});