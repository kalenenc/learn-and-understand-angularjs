var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = "Kalene";

    $timeout(function(){ // just like a regular timeout but wraps it in angularjs arch.
      $scope.name = "Everybody"; // just changing the name of the variable!!!
      // angularjs connects this model, this scope, to the view. it knew the view was using this variable, and it updated the view for you!!!! so powerful!!!!
      // so now all we have to worry about is updating our data and the view goes along for the ride!!!
    }, 3000);

}]);
