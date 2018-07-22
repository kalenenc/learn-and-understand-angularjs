var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {

    $scope.alertClick = function() {
      alert('clicked!')
    }

    $scope.name = "john doe";

}]);
