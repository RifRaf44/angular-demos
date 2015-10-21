'use strict';

/**
 * @ngdoc function
 * @name axiSuperSimpleDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the axiSuperSimpleDemoApp
 */
angular.module('axiSuperSimpleDemoApp')
  .controller('MainCtrl', function ($scope,$http, beer) {
    //$scope.beers = [{name:'Jupiler', brouwer: 'inbev'}, {name:'Duvel', brouwer:'moortgat'}, {name:'Westmalle', brouwer:'Westmalle'}];

    $scope.show = true;
    $scope.addBeer = function addBeer(){

      //$scope.beers.push($scope.newBeer);
    }

    $scope.price = 4.95;


    $scope.saveNewBeer = function(){
      $http.post('http://127.0.0.1:9688/beers', $scope.newBeer).then(
        function(response){
          alert('success');
          $scope.newBeer = {};
        }, function(response){
          alert('nooo :(');
        }
      )

    }

    $scope.doSomethingStupid = function(somethingStupid){
      if(somethingStupid){
        alert(somethingStupid);
      }
      else{alert('boogedie bop');}

    }
      $scope.inputtext = "initiele waarde";
    $scope.clickFunction = function(eenmooietext){
      alert('hela ik ben een ' + eenmooietext);
    };

    beer.getAllBeers().then(function(response){
      $scope.beers =  response.data;
    });

  });
