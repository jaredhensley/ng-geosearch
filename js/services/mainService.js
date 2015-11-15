angular.module('myApp').service('mainService', function ($http) {

  var coords = {
    lat: 40.71278,
    long: -74.006
  }

  this.makeSearch = function () {

    return $http({
      method: 'JSONP',
      url: 'https://api.instagram.com/v1/media/search?lat=40.71278&lng=-74.006&client_id=5699f0affafc4e5186e0b7ba1bf181d5&callback=JSON_CALLBACK'
    }).then(function (response) {
      return response.data.data;
      console.log(response);
    }, function (error) {
      console.log('error: ', error);
    });
  }


});