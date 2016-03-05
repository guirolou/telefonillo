angular
	.module('telefonillo')
	.controller('dashboard', ['$http', function($http){
		console.log('loading controller');
		$http.get('/dashboard').success(function(response){
			console.log('I got the data I requested');
		})
	}]);