angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.getResults = (function () {

    mainService.makeSearch().then(function (results) {

      $scope.datas = results;
      console.log('in the controller', $scope.datas);
    });

  })();

  function initMap() {
    console.log('testdfdfd');
    $scope.map = new google.maps.Map(document.getElementById('location-canvas'), {
      center: {
        lat: 40.71278,
        lng: -74.006
      },
      zoom: 11
    });
    dfd
    console.log('test');
    console.log(google);
    var geocoder = new google.maps.Geocoder();


  }



})