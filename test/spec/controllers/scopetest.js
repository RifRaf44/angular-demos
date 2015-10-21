'use strict';

describe('Controller: ScopetestCtrl', function () {

  // load the controller's module
  beforeEach(module('axiSuperSimpleDemoApp'));

  var ScopetestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScopetestCtrl = $controller('ScopetestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScopetestCtrl.awesomeThings.length).toBe(3);
  });
});
