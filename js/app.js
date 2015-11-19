angular.module('myApp', ['ui.router', 'ui.bootstrap', 'firebase'])


.config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {

      url: '/',
      templateUrl: 'templates/homeTmpl.html',
      controller: 'mainCtrl'

    })
    .state('favorites', {

      url: '/favorites',
      templateUrl: 'templates/favTmpl.html',
      controller: 'favCtrl'


    })
    .state('sign-up', {

      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'


    })
    .state('sign-in', {

      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'signinCtrl'


    })
    .state('log-out', {

      url: '/logout',
      controller: function (fbService) {

        fbService.logout();

      }


    })


});