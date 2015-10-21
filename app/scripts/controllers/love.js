'use strict';

/**
 * @ngdoc function
 * @name axiSuperSimpleDemoApp.controller:LoveCtrl
 * @description
 * # LoveCtrl
 * Controller of the axiSuperSimpleDemoApp
 */
angular.module('axiSuperSimpleDemoApp')
  .controller('LoveCtrl', ['$scope', 'love',function ($scope, love) {

    $scope.getLoveMatch = function(){
      love.getLoveMatch('raphael', 'sophie').then(function(response){
        console.log(response.data);
      },function(response){
        console.log(response);
      });
    };
  }]);
