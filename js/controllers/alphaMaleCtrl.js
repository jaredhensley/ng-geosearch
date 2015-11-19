angular.module('myApp').controller('alphaMaleCtrl', function ($scope, fbService, $firebaseObject, $firebaseArray) {

  var alphaVar = fbService.getAuthObj();
  var baseUrl = 'https://ng-geosearch.firebaseio.com/';




  alphaVar.$onAuth(function (user) {

    if (user) {
      console.log('HEY I AM HERE', user);
      var userRef = new Firebase(baseUrl + 'users/' + user.uid);
      $scope.user = $firebaseObject(userRef);
      $scope.user.$loaded().then(function (res) {
        var imageRef = new Firebase(baseUrl + 'users/' + $scope.user.id + '/images');
        $scope.images = $firebaseArray(imageRef);
        console.log($scope.images);
      });

    } else {
      console.log('HEY I AM WWHOOOOO HERE', user);
      $scope.user = user;
    }

  });

});