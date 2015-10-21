'use strict';

/**
 * @ngdoc function
 * @name axiSuperSimpleDemoApp.controller:JosCtrl
 * @description
 * # JosCtrl
 * Controller of the axiSuperSimpleDemoApp
 */
angular.module('axiSuperSimpleDemoApp')
  .controller('JosCtrl', function ($scope,sonService) {

    $scope.someClick = function(){
      $scope.doCrazyStuff();
    }

    $scope.doCrazyStuff = function (){
      return 12;
    }

    $scope.click = function(){
      sonService.getWeather().then(function(response){
        alert(response.weather);
      },function(response){
        alert(response.weather);
      },function(response){
        $scope.percent = response;
      })
    };

    //var firstBeer = new beerService('cara', 'onbekend', 33);
    //
    //console.log(firstBeer);
    //firstBeer.drink();
    //console.log(firstBeer.sing());
    //firstBeer.drink();
    //console.log(firstBeer.sing());
    //firstBeer.drink();
    //console.log(firstBeer.sing());

  });
