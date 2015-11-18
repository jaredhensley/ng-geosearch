angular.module('myApp', ['ui.router', 'ui.bootstrap', 'firebase'])


.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {

      url: '/',
      templateUrl: '',
      controller: 'imgCtrl',
      resolve: {



      }



    });


});