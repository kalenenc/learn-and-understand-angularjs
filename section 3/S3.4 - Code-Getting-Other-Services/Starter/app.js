var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
  //both injected into the controller
    // console.log($scope);
    // console.log($log);
    //
    // $log.log('hello'); // hello
    // $log.info('information');
    // $log.debug('some debug code to run');
    // $log.warn('warning');
    // $log.error('error');

    //  --- $filter ----

    $scope.name = 'john';
    $scope.formattedname = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedname);

    console.log($resource);
});
