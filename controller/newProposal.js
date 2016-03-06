angular
	.module('telefonillo')
	.controller('newProposal',
		[
			'$scope',
			'$http',
			function($scope, $http){
				console.log('controller newProposal log this!');
				$scope.proposal = {
					isImportant: false,
					isUrgent: false
				};

				$scope.addProposal = function(){
					console.log($scope.proposal);
					var newProposal = {
						title: $scope.proposal.title,
						description: $scope.proposal.description,
						consortium_id: '56db156a47e78d223ac9981e',
						people_id: '56db134f47e78d223ac9981d',
						votes: [{
							people_id: '56db134f47e78d223ac9981d',
							isUrgent: $scope.proposal.isUrgent,
							isImportant: $scope.proposal.isImportant
						}],
						creationDate: new Date().toISOString()
					};
					$http
						.post('/proposal', newProposal)
						.success(function(response){
							console.log(response)
						})
				}
			}
		])