'use strict';

describe('Controller: JosCtrl', function () {

  // load the controller's module
  beforeEach(module('axiSuperSimpleDemoApp'));

  var createController, JosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JosCtrl = $controller('JosCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    scope.$digest();
  }));

  it('should do some crazy stuff',function(){
    // Arrange
    spyOn(scope, 'doCrazyStuff');
    // Act
    scope.someClick();
    // Assert
    expect(scope.doCrazyStuff).toHaveBeenCalled();
  })

  it('should return 12',function(){
    // Arrange
    spyOn(scope, 'doCrazyStuff').and.callThrough();
    // Act
    var i = scope.doCrazyStuff();
    // Assert
    expect(i).toBe(12);
  })

  it('should return 745',function(){
    // Arrange
    spyOn(scope, 'doCrazyStuff').and.returnValue(745);
    // Act
    var i = scope.doCrazyStuff();
    // Assert
    expect(i).toBe(745);
  })
});
