angular.module('myApp').directive('mainDirective', function ($uibModal) {

  return {
    templateUrl: 'templates/resultTmpl.html',
    replace: true,
    scope: {
      data: '=',
      addFav: '&',
      images: "="
    },
    link: function (scope, elem, attrs) {
      elem.on('click', function () {
        elem.css('opacity', '.5');
        var modalInstance = $uibModal.open({
          animation: true,
          controller: 'modalCtrl',
          scope: scope,
          templateUrl: 'templates/modal.html',
          size: 'lg'
        });
      });

    }
  }

});