angular.module('myApp').controller('mainCtrl', function ($scope, mainService, coordsService) {


  //MAP OPTIONS FOR NEW MAP INSTANCE
  $scope.mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(41.923, 12.513),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  }

  $scope.map = new google.maps.Map(document.getElementById('location-canvas'), $scope.mapOptions);


  //IG LOCATION ENDPOINT API CALL
  $scope.getResults = function (address) {

    mainService.makeSearch(address).then(function (results) {

      $scope.datas = results;
      console.log('in the controller', $scope.datas);
    });

  }

  //GOOGLE MAP LOCATION API CALL
  $scope.getCoords = function (searchTerm) {

    coordsService.something(searchTerm).then(function (response) {
      console.log(response, response.lat());

      $scope.map.setCenter(response);
      $scope.getResults(response);

    })



  }


})