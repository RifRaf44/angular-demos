'use strict';

/**
 * @ngdoc function
 * @name axiSuperSimpleDemoApp.controller:JosCtrl
 * @description
 * # JosCtrl
 * Controller of the axiSuperSimpleDemoApp
 */
angular.module('axiSuperSimpleDemoApp')
  .controller('JosCtrl', function ($scope, Beer, sonService) {

    $scope.click = function(){
      sonService.getWeather().then(
        function(response){
          console.log(response)
        },
        function(response){
          console.log(response)
        },
        function(response){
          $scope.percent = response;
        }
      )
    };

    //var firstBeer = new Beer('cara', 'onbekend', 33);
    //
    //console.log(firstBeer);
    //firstBeer.drink();
    //console.log(firstBeer.sing());
    //firstBeer.drink();
    //console.log(firstBeer.sing());
    //firstBeer.drink();
    //console.log(firstBeer.sing());

  });
