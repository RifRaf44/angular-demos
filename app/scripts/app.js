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
  .config(function ($routeProvider, loveProvider) {
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
      .when('/scopetest', {
        templateUrl: 'views/scopetest.html',
        controller: 'ScopetestCtrl'
      })
      .when('/love', {
        templateUrl: 'views/love.html',
        controller: 'LoveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    loveProvider.baseUrl = "https://love-calculator.p.mashape.com/getPercentage";
    //loveProvider.apiKey = "4LPEGKxsbTmshgzUqj2DUlPIPTrTp1f2PfLjsnYvySEwdaE91z";
    //beerProvider.baseUrl = "http://127.0.0.1:9688/beers"
  });
