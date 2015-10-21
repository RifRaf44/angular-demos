angular.module('axiSuperSimpleDemoApp.services').factory('countdownService', function ($q, $interval, $timeout) {

  return{
    countdown : function(i) {

      var deferred = $q.defer();

      var interval = $interval(function() {
        --i;
        deferred.notify(i);
      }, 1000);

      $timeout(function () {
        $interval.cancel(interval);
        if (!isNaN(i)) {
          deferred.resolve("Happy New Year!");
        } else {
          deferred.reject("FAIL");
        }
      }, i * 1000);

      return deferred.promise;
    }
  }

});/**
 * Created by RaphaelV on 21/10/2015.
 */
