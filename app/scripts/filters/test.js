'use strict';

/**
 * @ngdoc filter
 * @name axiSuperSimpleDemoApp.filter:test
 * @function
 * @description
 * # test
 * Filter in the axiSuperSimpleDemoApp.
 */
angular.module('axiSuperSimpleDemoApp.filters',[])
  .filter('test', function () {
    return function (input) {
      return 'test filter: ' + input;
    };
  });
