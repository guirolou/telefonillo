angular
	.module('telefonillo')
	.controller('proposalsList',
		[
			'$scope',
			'$http',
			function($scope, $http){
				console.log('controller proposalsList log this!');

				$http
					.get('/proposalsList')
					.success(function(response){
						console.log('I got the data I requested');
						$scope.proposalsList = response;
					});
			}
		]);