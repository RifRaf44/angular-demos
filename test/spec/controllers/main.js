/**
 * Created by RaphaelV on 19/10/2015.
 */


describe('MainController', function(){

  var $httpBackend, scope, $controller;

  beforeEach(module('axiSuperSimpleDemoApp'));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _$controller_){
    $httpBackend = _$httpBackend_;
    scope = _$rootScope_.$new();
    $controller = _$controller_;

  }))

  it('should call get beers', function(){
    // Arrange
      $httpBackend.expectGET('http://127.0.0.1:9688/beers').respond([{name: 'care', brouwer:'less'}])
      //$httpBackend.expectPOST('http://127.0.0.1:9688/beers');
    // ACT
      var controller = $controller('MainCtrl', {$scope: scope});
      //scope.$digest();
      $httpBackend.flush();
  })

  afterEach(function () {
    // ASSERT
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


});
