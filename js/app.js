angular.module('RootOne', ['ngRoute', 'RouteControllers']);
 
angular.module('RootOne').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/Home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'templates/About.html',
        controller: 'AboutController'
    });
});