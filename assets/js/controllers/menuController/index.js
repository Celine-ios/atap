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
		$scope.triggerTwo = function() {
			var content = document.getElementsByClassName('content')[0];
			var head = document.getElementsByClassName('menu-header')[0];
			content.style.display = 'block';
			head.innerHTML = '<h2 style="text-align: center;">Menú</h2>';
			head.style.width = 'auto';
			head.style.padding = '4%';
		}; 
});