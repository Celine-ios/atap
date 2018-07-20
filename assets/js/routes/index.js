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
	}).when('/facturacion', {
		templateUrl: 'assets/templates/bills/index.html'
	}).when('/orden-trabajo', {
		templateUrl:'assets/templates/orders/workorders/index.html'
	}).when('/orden-trabajo-detalle', {
		templateUrl:'assets/templates/orders/workorders/detail/index.html'
	}).when('/agregar-servicios', {
		templateUrl: 'assets/templates/services/add/index.html'
	}).when('/cotizaciones', {
		templateUrl: 'assets/templates/quotations/index.html'
	}).when('/agregar-cotizaciones', {
		templateUrl: 'assets/templates/quotations/add/index.html'
	}).when('/servicios', {
		templateUrl: 'assets/templates/services/index.html'
	}).when('/editar-servicios', {
		templateUrl: 'assets/templates/services/edit/index.html'
	}).when('/revision', {
		templateUrl: 'assets/templates/review/index.html'
	}).when('/proveedores', {
		templateUrl: 'assets/templates/providers/index.html'
	}).when('/agregar-proveedores', {
		templateUrl: 'assets/templates/providers/add/index.html'
	}).when('/cuentas', {
		templateUrl: 'assets/templates/accounts/index.html'
	});
});