'use strict';

/**
 * @ngdoc function
 * @name axiSuperSimpleDemoApp.controller:ScopetestCtrl
 * @description
 * # ScopetestCtrl
 * Controller of the axiSuperSimpleDemoApp
 */
angular.module('axiSuperSimpleDemoApp')
  .controller('ScopetestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.selectedVal = 'intial Val';
    $scope.selectedValue = {name: 'initial Val'};

  });
