/**
 * Created by RaphaelV on 20/10/2015.
 */
angular.module('axiSuperSimpleDemoApp.services').factory('sonService', function($q, $timeout, $interval){
  return{
    getWeather: function(){

      var deferred = $q.defer();
      var i = 0;

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      var interval = $interval(function(){
        deferred.notify(Math.floor(++i/(temp) * 100));
      }, 500);

      var temp = getRandomInt(0, 25);

      $timeout(function(){
        $interval.cancel(interval);
        if(temp > 12){
          return deferred.resolve({weather: 'good'});
        }
        else{
          return deferred.reject({weather: 'bad'});
        }
      }, temp * 500);

      return deferred.promise;
    }
  }

});
