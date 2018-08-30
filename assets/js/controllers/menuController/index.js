app.controller('menuControl', function($scope){
		$scope.trigger = function() {
			var content = document.getElementsByClassName('content')[0];
			var head = document.getElementsByClassName('menu-header')[0];
			content.style.display = 'none';
			var lines = '<hr style="border: 0.8px solid blue;height: 0.2em;background: blue;margin-top: 2%;"><hr style="border: 0.8px solid blue;height: 0.2em;background: blue;margin-top: 2%;"><hr style="border: 0.2px solid blue;height: 0.2em;background: blue;margin-top: 2%;">';
			head.innerHTML = lines;
			head.style.width = '4em';
			head.style.padding = '15%';

		}
		$scope.display = (list) => {
			var lists = {
				config: {
					id: 'config-list',
					content: '<li><a href="#!informacion">Información</a></li><li><a href="#!generales">Generales</a></li><li><a href="#!perfiles">Perfiles</a></li>'
				},
				catalogues: {
					id: 'cat-list',
					content: '<li><a href="#!servicios">Servicios</a></li><li><a href="#!usuarios">Usuarios</a></li><li><a href="#!cuentas">Cuenta</a></li><li><a href="#!proveedores">Proveedores</a></li>'
				},
				spends: {
					id: 'spends-list',
					content: '<li><a href="#!agregar-gastos">Agregar</a></li><li><a href="#!consultar-gastos">Consultar</a></li>'
				},
				orders: {
					id: 'orders-list',
					content: '<li><a href="">Agregar</a></li><li><a href="#!ordenes">Consultar</a></li>'
				},
				pays: {
					id: 'pays-list',
					content: '<li><a href="">Agregar</a></li><li><a href="">Consultar</a></li>'
				},
				accountState: {
					id: 'accountState-list',
					content: '<li><a href="#!ingresos">Ingresos</a></li><li><a href="#!egresos">Egresos</a></li>'
				}

			};

			var displayOrHide = (id, content) => {
				if(document.getElementById(id).innerHTML == '') {
						document.getElementById(id).innerHTML = content;
						return;
					}
					document.getElementById(id).innerHTML = '';
			};

			switch(list) {

				case 'config':
					displayOrHide(lists.config.id, lists.config.content);						
					break;

				case 'catalogues':
					displayOrHide(lists.catalogues.id, lists.catalogues.content);
					break;

				case 'spends':
					displayOrHide(lists.spends.id, lists.spends.content);
					break;

				case 'orders':
					displayOrHide(lists.orders.id, lists.orders.content);
					break;

				case 'pays':
					displayOrHide(lists.pays.id, lists.pays.content);
					break;

				case 'accountState':
					displayOrHide(lists.accountState.id, lists.accountState.content);
					break;

				default:
					return false;
					break;
			}
	
		};

		$scope.triggerTwo = function() {
			var content = document.getElementsByClassName('content')[0];
			var head = document.getElementsByClassName('menu-header')[0];
			content.style.display = 'block';
			head.innerHTML = '<h2 style="text-align: center;">Menú</h2>';
			head.style.width = 'auto';
			head.style.padding = '4%';
		}; 
});