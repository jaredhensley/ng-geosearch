angular.module('myApp').controller('modalCtrl', function ($scope) {

  $scope.comments = $scope.data.comments.data;


  $scope.testeThing = function(thing) {
    console.log('thing', thing);
  };

  setTimeout(function () {

    var map = new google.maps.Map(document.getElementById('street-canvas'), {});

    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('street-canvas'), {
        position: {
          lat: $scope.data.location.latitude,
          lng: $scope.data.location.longitude
        },
        pov: {
          heading: 34,
          pitch: 10
        }
      });

    map.setStreetView(panorama);

  }, 1);

});
