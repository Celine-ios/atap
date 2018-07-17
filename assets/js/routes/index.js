app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/templates/home/index.html'
	}).when('/ordenes', {
		templateUrl: 'assets/templates/orders/index.html'
	});
});