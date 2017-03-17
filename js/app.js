angular.module('RootOne', ['ngRoute', 'RouteControllers', 'angularCSS']);
 
angular.module('RootOne').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'HTML/Home.html',
        controller: 'HomeController',
        css: 'CSS/Desktop.css'
    })
    .when('/about', {
        templateUrl: 'HTML/About.html',
        controller: 'AboutController'
    });
});