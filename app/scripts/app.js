'use strict';

/**
 * @ngdoc overview
 * @name axiSuperSimpleDemoApp
 * @description
 * # axiSuperSimpleDemoApp
 *
 * Main module of the application.
 */
angular.module('axiSuperSimpleDemoApp.services',[]);
angular
  .module('axiSuperSimpleDemoApp', [
    'ngRoute',
    'axiSuperSimpleDemoApp.filters',
    'axiSuperSimpleDemoApp.directives',
    'axiSuperSimpleDemoApp.services'
  ])
  .config(function ($routeProvider, beerProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/jos',{
        templateUrl: 'views/jos.html',
        controller: 'JosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    beerProvider.baseUrl = "http://127.0.0.1:9688";
  });
