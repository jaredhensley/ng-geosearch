angular.module('myApp').service('markersService', function () {

  var markers = [];


  this.clearMap = function () {

    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

  this.populateMap = function (totalResults, map) {

    this.clearMap();

    totalResults.forEach(function (value) {
      var pointer = value;
      pointer.image = pointer.images.thumbnail.url;
      var position = new google.maps.LatLng(pointer.location.latitude, pointer.location.longitude);

      function checkForTitleText() {
        if (pointer.caption && pointer.caption.text) {
          return pointer.caption.text;
        } else {
          return "test";
        }
      }

      pointer.marker = new google.maps.Marker({
        position: position,
        map: map,
        title: checkForTitleText(),
        icon: {
          url: pointer.image,
          size: new google.maps.Size(80, 80),
          scaledSize: new google.maps.Size(80, 80)
        }
      });

      markers.push(pointer.marker);


    });

  }



})