angular.module('myApp').directive('mainDirective', function ($uibModal) {
  console.log('test1', $uibModal);
  return {
    templateUrl: 'templates/resultTmpl.html',
    replace: true,
    link: function (scope, elem, attrs) {
      elem.on('click', function () {
        elem.css('opacity', '.5');
        var modalInstance = $uibModal.open({
          animation: scope.animationsEnabled,
          controller: 'modalCtrl',
          resolve: {
            data: function () {
              return scope.data;
            },
            test: function () {
              return "this is a test";
            }
          },
          templateUrl: 'templates/modal.html',
          size: 'lg'
        });
      });

    }
  }

});