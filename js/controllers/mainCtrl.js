angular.module('myApp').controller('mainCtrl', function ($scope, $uibModal, mainService, coordsService, markersService) {

  console.log($uibModal);

  //MAP OPTIONS FOR NEW MAP INSTANCE
  $scope.mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(41.923, 12.513),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  $scope.map = new google.maps.Map(document.getElementById('location-canvas'), $scope.mapOptions);


  //IG LOCATION ENDPOINT API CALL
  $scope.getResults = function (address) {

    mainService.makeSearch(address).then(function (results) {
      $scope.datas = results;
      $scope.populateMarkers();
    });

  }

  //GOOGLE MAP LOCATION API CALL
  $scope.getCoords = function (searchTerm) {

    coordsService.something(searchTerm, $scope.map).then(function (response) {

      $scope.map.setCenter(response);
      $scope.getResults(response);
    });

  }

  //POPULATE MAP WITH MARKERS
  $scope.populateMarkers = function () {
    console.log($scope.datas)
    markersService.populateMap($scope.datas, $scope.map);
  }

  console.log($scope.images);

  $scope.addFav = function (url) {
    console.log($scope.images);
    $scope.images.$add({
      url: url
    });
  }



})