angular.module('myApp').service('mainService', function ($http, $q) {

  this.makeSearch = function (address) {

    return $http({
      method: 'JSONP',
      url: 'https://api.instagram.com/v1/media/search?lat=' + address.lat + '&lng=' + address.lng + '&client_id=5699f0affafc4e5186e0b7ba1bf181d5&callback=JSON_CALLBACK'
    }).then(function (response) {
      return response.data.data;

    }, function (error) {
      console.log('error: ', error);
    });
  }


});
