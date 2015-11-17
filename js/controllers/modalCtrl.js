angular.module('myApp').controller('modalCtrl', function ($scope, test, data) {

  $scope.data = data;
  $scope.test = test;
  console.log(data);
  console.log(data.location.latitude);
  console.log(data.location.longitude);

  setTimeout(function () {

    var map = new google.maps.Map(document.getElementById('street-canvas'), {
      center: new google.maps.LatLng(41.923, 12.513),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

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