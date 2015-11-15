angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.getResults = (function () {

    mainService.makeSearch().then(function (results) {

      $scope.datas = results;
      console.log('in the controller', $scope.datas);
    });

  })();



})