/**
 * Created by RaphaelV on 19/10/2015.
 */
angular.module('axiSuperSimpleDemoApp.directives',[]).directive('banaanDirective',function($log){
  return{
    template: '<div ng-click="heyDaar()"> ik ben een banaan ' +
    '<br/> two way binding : <input type="text" ng-model="twoWayVar"/>' +
    '<br/> one way binding : <input type="text" ng-model="oneWayVar"/></div>',
    //templateUrl:'views/banaandirective.html',
    restrict: 'EA',
    scope:{
        myLocalFunc: '&dirFunc',
        oneWayVar: '@',
        twoWayVar: '='
    },


     link: function(scope, element, attrs){

          console.log('dit is de link stap');
          scope.clickFunction = function(){
            alert(scope.myvar);
          }

       scope.heyDaar = function(){
         scope.myLocalFunc({eenmooietext: "blala"});
         $log.log('test');
       }


        }
    }


}

);
//  .directive('peerDirective', function(){
//return{
//  template: '<div>Ik ben een awesome peertje </div> <banaan-directive></banaan-directive>',
//  controller: function($scope, $element){
//    this.AwesomeVar = 'Ik ben echt mega awesome';
//  }
//}
//
//  })



