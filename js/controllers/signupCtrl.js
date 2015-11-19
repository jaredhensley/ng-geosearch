angular.module('myApp').controller('signupCtrl', function ($scope, $firebaseAuth, fbService) {

  $scope.register = function (user) {

    fbService.register(user);
    $scope.user = {};
  }



})