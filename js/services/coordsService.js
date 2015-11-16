angular.module('myApp').service('coordsService', function ($q) {

  this.something = function (searchTerm) {

    var dfd = $q.defer();
    var geocoder = new google.maps.Geocoder();
    console.log(geocoder);

    function geocodeAddress() {

      geocoder.geocode({
        'address': searchTerm
      }, function (results, status) {

        if (status === google.maps.GeocoderStatus.OK) {
          newAddress = results[0].geometry.location;
          dfd.resolve({
            lat: newAddress.lat(),
            lng: newAddress.lng()
          });

        } else {
          dfd.reject(status);
        }

      });

    };

    geocodeAddress();
    return dfd.promise;

  }
});