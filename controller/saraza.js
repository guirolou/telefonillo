var myApp = angular.module('myApp', []);

myApp.controller('appControl', ['$scope', '$http', function($scope, $http){
	console.log('it is a control');

	var refresh = function(){
		$http.get('/contactsList').success(function(response){
			console.log('I got the data I requested');
			$scope.contactsList = response;
			$scope.contact = '';
		})
	}

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);

		$http.post('/contactsList', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	}

	$scope.removeContact = function (id) {
		console.log(id);
		$http.delete('/contactsList/' + id).success(function(response){
			refresh();
		});
	}

	$scope.editContact = function(id) {
		console.log(id);
	}

}]);
