var myApp = angular.module('myApp', ['ngRoute']);

// Route provider is available because we included it with the ngRoute service
myApp.config(function($routeProvider){

	$routeProvider
	.when('/', { // Whenever the hash has #/, display the templateUrl and controller
		templateUrl: 'pages/main.html', // physical location of the template
		controller: 'mainController' // main controller it's connected to
	})

	.when('/second', { // Whenever the hash has #/second, display the templateUrl and controller
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {

  $scope.name = "Main";


}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log) {

   $scope.name = "Second";

}]);

