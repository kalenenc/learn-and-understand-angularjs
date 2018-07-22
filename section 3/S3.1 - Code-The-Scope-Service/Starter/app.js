var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

  $scope.name = "Jane";
  $scope.age = 25;

  $scope.getName = function() {
    return 'John Doe';
  }

  $scope.getName();

  console.log($scope);

});
