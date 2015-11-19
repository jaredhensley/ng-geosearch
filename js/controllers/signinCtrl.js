angular.module('myApp').controller('signinCtrl', function ($scope, $firebaseAuth, fbService) {


  $scope.signin = function (user) {

    fbService.login(user);
    $scope.user = {};

  }

})