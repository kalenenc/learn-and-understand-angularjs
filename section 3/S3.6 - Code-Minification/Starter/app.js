var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $log.info($scope);
}]);

//this array contains two strings and a function

// last element in the array is always the function that defines the controller

// the elements of the array that come before should be whatever the parameters should be passed to the function

// minifier never changes the values inside a string

// angular js then sees the array, looks at the first elements of the array, determines which strings are there, then passes that string in as the respective parameters to the function.... and then goes and then builds objects like that on the fly for you
