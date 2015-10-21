'use strict';

describe('Filter: beer', function () {

  // load the filter's module
  beforeEach(module('axiSuperSimpleDemoApp'));

  // initialize a new instance of the filter before each test
  var beerFilter;
  beforeEach(inject(function ($filter) {
    beerFilter = $filter('beer');
  }));

  it('should return the input prefixed with "beer filter:"', function () {
    var beer = {name: 'maes', brouwer:'alken'};
    expect(beerFilter(beer)).toBe('maes alken');
  });

});
