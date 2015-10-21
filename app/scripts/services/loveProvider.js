/**
 * Created by RaphaelV on 21/10/2015.
 */
angular.module('axiSuperSimpleDemoApp.services')
//  .provider('loveNietWerkend', function(){
//  this.baseUrl = 'test';
//  this.apiKey = 'test';
//
//  this.$get = ['$http',function($http){
//    var self = this;
//    return
//    {
//      getLove : function getLove(fname, sname){
//        var config = {
//          headers: {
//            'X-Mashape-Key': self.apiKey
//          }
//        }
//
//        return $http.get(self.baseUrl+'?fname='+encodeURIComponent(fname) + '&sname='+ encodeURIComponent(sname), config);
//
//      }
//    };
//  }]
//})
.provider('love', function(){
  this.baseUrl = 'nikske';
  this.$get = function($http){
    var self = this;
    return {
      getLoveMatch: function(fname,sname){
        var config = {
          headers:  {
            'X-Mashape-Key': '4LPEGKxsbTmshgzUqj2DUlPIPTrTp1f2PfLjsnYvySEwdaE91z'
          }
        }

        return $http.get(self.baseUrl + '?fname='+encodeURIComponent(fname) + '&sname='+ encodeURIComponent(sname), config);
      }
    }
  }
});


