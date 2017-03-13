angular.module('RootOne', ['ngRoute', 'RouteControllers']);
 
angular.module('RootOne').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'HTML/Home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'HTML/About.html',
        controller: 'AboutController'
    });
});