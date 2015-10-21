'use strict';

/**
 * @ngdoc filter
 * @name axiSuperSimpleDemoApp.filter:beer
 * @function
 * @description
 * # beer
 * Filter in the axiSuperSimpleDemoApp.
 */
angular.module('axiSuperSimpleDemoApp')
  .filter('beer', function () {
    return function (beer, parameter) {
      if (beer.brouwer == parameter){
        return 'vies';
      }
      else{
        return beer.name + ' ' + beer.brouwer;
      }
    };
  });
