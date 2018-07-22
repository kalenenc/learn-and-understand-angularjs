var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

  $scope.handle = '';

  $scope.lowercaseHandle = function() {
    return $filter('lowercase')($scope.handle);
  }

  $scope.$watch('handle', function(newValue, oldValue) {
    console.log('Changed');
    console.log('Old: ' + oldValue);
    console.log('New: ' + newValue);
    console.log('-----');
  });

  $timeout(function(){

    $scope.handle = "new twitter handle";
    console.log('scope.handle changed!');


  }, 3000)



}]);
