///**
// * Created by RaphaelV on 19/10/2015.
// */
//'use strict';
//
//describe('Directive: test', function () {
//
//  // load the directive's module
//  beforeEach(module('axiSuperSimpleDemoApp.directives'));
//  beforeEach(module('templates'));
//
//  var element,
//    scope, $log;
//
//  beforeEach(inject(function ($rootScope, _$log_) {
//    scope = $rootScope.$new();
//    $log = _$log_;
//    spyOn($log, 'log');
//  }));
//
//  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<banaan-directive></banaan-directive>');
//    element = $compile(element)(scope);
//    scope.$digest()
//    scope = element.isolateScope();
//
//    console.log(element);
//    expect(element.text().trim()).toBe('ik ben een banaan');
//
//    scope.heyDaar();
//    expect($log.log).toHaveBeenCalled();
//  }));
//});
