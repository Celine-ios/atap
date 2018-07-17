app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/templates/home/index.html'
	}).when('/ordenes', {
		templateUrl: 'assets/templates/orders/index.html'
	}).when('/reporte_movimientos', {
		templateUrl: 'assets/templates/movements_report/index.html'
	}).when('/agregar-gastos', {
		templateUrl: 'assets/templates/spends/add/index.html'
	}).when('/consultar-gastos', {
		templateUrl: 'assets/templates/spends/query/index.html'
	}).when('/editar-gastos', {
		templateUrl: 'assets/templates/spends/edit/index.html'
	}).when('/asignaciones', {
		templateUrl: 'assets/templates/assignaments/index.html'
	});
});