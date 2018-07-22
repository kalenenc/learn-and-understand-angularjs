var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

    console.log($scope);

});

var searchPeople = function(firstName, lastname, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));
// ["firstname", "lastname", "height", "age", "occupation"]

// parsed the string and created an array, one for each parameter

var searchPeople = function(firstName, lastname, height, age, occupation, $scope) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));
// ["firstname", "lastname", "height", "age", "occupation", "$scope"]

// so when angular sees a name it recognizes, such as $scope, it will instead know to pass the scope object in in place of the string
