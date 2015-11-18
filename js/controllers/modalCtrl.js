angular.module('myApp').controller('modalCtrl', function ($scope, data) {

  $scope.data = data;
  $scope.comments = data.comments.data;
  console.log($scope.comments);

  setTimeout(function () {

    var map = new google.maps.Map(document.getElementById('street-canvas'), {});

    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('street-canvas'), {
        position: {
          lat: data.location.latitude,
          lng: data.location.longitude
        },
        pov: {
          heading: 34,
          pitch: 10
        }
      });

    map.setStreetView(panorama);

  }, 1);

});