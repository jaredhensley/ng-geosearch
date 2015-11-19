angular.module('myApp').directive('mainDirective', function ($uibModal) {

  return {
    templateUrl: 'templates/resultTmpl.html',
    replace: true,
    link: function (scope, elem, attrs) {
      console.log(scope.data);
      elem.on('click', function () {
        elem.css('opacity', '.5');
        var modalInstance = $uibModal.open({
          animation: scope.animationsEnabled,
          controller: 'modalCtrl',
          resolve: {
            data: function () {
              return scope.data;
            }
          },
          templateUrl: 'templates/modal.html',
          size: 'lg'
        });
      });

    }
  }

});
