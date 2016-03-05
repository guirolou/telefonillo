angular
	.module('telefonillo', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl:'/pages/dashboard.html'
			})
			.when('/proposals/new',{
				templateUrl:'/pages/proposals/new.html'
			})
			.otherwise({
				redirectTo:'/'
			})
	});