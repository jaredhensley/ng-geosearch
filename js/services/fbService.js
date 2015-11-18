angular.module('myApp').service('fbService', function ($firebaseArray, $firebaseObject) {

  var baseUrl = 'https://ng-geosearch.firebaseio.com/'
  var ref = new Firebase(baseUrl);
  var usersRef = new Firebase(baseUrl + '/users/');


});