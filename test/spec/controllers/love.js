'use strict';

describe('Controller: LoveCtrl', function () {

  // load the controller's module
  beforeEach(module('axiSuperSimpleDemoApp'));

  var LoveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoveCtrl = $controller('LoveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoveCtrl.awesomeThings.length).toBe(3);
  });
});
