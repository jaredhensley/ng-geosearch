angular.module('myApp').service('coordsService', function ($q) {

  this.something = function (searchTerm, map) {
    var dfd = $q.defer();
    var geocoder = new google.maps.Geocoder();

    function geocodeAddress() {

      geocoder.geocode({
        'address': searchTerm
      }, function (results, status) {

        if (status === google.maps.GeocoderStatus.OK) {
          newAddress = results[0].geometry.location;

          var point = {
            lat: newAddress.lat(),
            lng: newAddress.lng()
          }

          var marker = new google.maps.Marker({
            map: map,
            position: point
          });


          dfd.resolve({
            lat: newAddress.lat(),
            lng: newAddress.lng(),
          });

        } else {
          dfd.reject(status);
        }

      });

    };

    geocodeAddress(); //initiate geocodeAddress
    return dfd.promise; //return custom promise

  }

});