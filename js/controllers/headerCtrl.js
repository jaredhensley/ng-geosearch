angular.module('myApp').controller('headerCtrl', function ($scope, $firebaseAuth, fbService) {

  $scope.logout = function (user) {
    fbService.logout(user);

  }
});