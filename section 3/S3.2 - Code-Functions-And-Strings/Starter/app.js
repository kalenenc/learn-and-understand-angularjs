var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {



});

var searchPeople = function (firstname, lastname, height, age, occupation) {
  return 'Jane Doe';
}

console.log(searchPeople()); // Jane Doe
console.log(searchPeople); // returns a string representation of the function typed out

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
