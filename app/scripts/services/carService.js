/**
 * Created by RaphaelV on 20/10/2015.
 */
angular.module('axiSuperSimpleDemoApp.services')
.service('Beer', function(){
    function Beer(name, brouwer, volume){
      var self = this;


      self.name = name;
      self.brouwer = brouwer;
      self.volume = volume;

      self.drink = function(){
        self.volume = self.volume- 10;
      }

      self.sing = function(){
        return 'lalala ' + self.volume + ' cl left';
      }
    }

    return Beer;
  })
  .factory('beerService', ['$http',function($http){

    var getAllBeers = function(){
      return $http.get('http://127.0.0.1:9688/beers');
    }

    return{
      getAllBeers: getAllBeers
    }
}])
//.service('beerService',function($http){
//    function getAllBeers(){
//      return $http.get('http://127.0.0.1:9688/beers');
//    }
//
//    return{
//      getAllBeers: getAllBeers
//    }
//  })
.provider('beer', function(){
    this.baseUrl = "echtTotaalGeenGeldigeUrl";

    this.$get = function($http){
    var self = this;
    var getAllBeers = function(){
      return $http.get(self.baseUrl);
    }

    return{
      getAllBeers: getAllBeers
    }
  }});


