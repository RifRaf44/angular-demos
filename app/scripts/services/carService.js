/**
 * Created by RaphaelV on 20/10/2015.
 */
angular.module('axiSuperSimpleDemoApp.services')
//  .factory('baseService', function(){
//return{
//  baseUrl: 'http://localhost:9688',
//  query: function(){
//    console.log(baseUrl);
//  }
//}
//})
//.factory('carService', function(baseService){
//  function CarService(){
//      this.baseUrl = 'api/cars';
//    }
//
//    CarService.prototype = baseService;
//    return new CarService();
//});
.factory('beerFactory', function($http){
    var baseUrl = 'http://127.0.0.1:9688';
    var getAllBeers = function(){
      return $http.get(baseUrl + "/beers");
    };

    var getBeer = function(id){
      return $http.get(baseUrl + "/beers/" + id).then(function(response){
        return response.data;
      })
    };

    return{
      getAllBeers: getAllBeers,
      getBeer: getBeer
    }
  })
  .service('beerService', function($http){
    var baseUrl = 'http://127.0.0.1:9688';
    this.getAllBeers = function(){
      return $http.get(baseUrl + "/beers");
    };

    this.getBeer = function(id){
      return $http.get(baseUrl + "/beers/" + id).then(function(response){
        return response.data;
      })
    };
  })
.provider('beer', function(){
    this.baseUrl = 'echtTotaalGeenGeldigeUrl';

    this.$get = ['$http',function($http){
      var self = this;
      var getAllBeers = function(){
        return $http.get(self.baseUrl + "/beers");
      };

      var getBeer = function(id){
        return $http.get(self.baseUrl + "/beers/" + id).then(function(response){
          return response.data;
        })
      };

      return{
        getAllBeers: getAllBeers,
        getBeer: getBeer
      }

    }]
  })
//.service('beerService', function(){
//
//    function Beer(name, brouwer, volume){
//      var that = this;
//      that.name = name;
//      that.brouwer = brouwer;
//      that.volume = volume;
//
//      that.drink = function(){
//        that.volume = that.volume - 10;
//      };
//
//      that.sing = function(){
//        return "lalala, " + that.volume + "cl left in the bottle"
//      }
//
//    };
//
//    return Beer;
//
//  })
