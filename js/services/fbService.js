angular.module('myApp').service('fbService', function ($firebaseArray, $firebaseObject, $firebaseAuth, $state) {

  var baseUrl = 'https://ng-geosearch.firebaseio.com/'
  var ref = new Firebase(baseUrl);
  var usersUrl = baseUrl + '/users/';
  var usersRef = new Firebase(baseUrl + '/users/');

  var authObj = $firebaseAuth(ref);

  var users = $firebaseObject(usersRef);

  var loggedInUserRef;

  this.login = function (userObj) {

    authObj.$authWithPassword(userObj).then(function (response) {

      console.log('in the database');
      console.log(response);

    });

  }

  this.register = function (userObj) {
    authObj.$createUser(userObj).then(function (userData) {

      var newRef = usersUrl + userData.uid;
      console.log(newRef);
      var newUser = new Firebase(newRef);
      newUser.set({
        email: userData.email
      });

      authObj.$authWithPassword(userObj).then(function (response) {
        console.log(response);
      })

    });

  }

  authObj.$onAuth(function (response) {

    console.log(response);
    if (response) {
      console.log('authenticated');
      $state.go('home');


    } else {
      console.log('not authenticated');
      if ($state) {
        console.log('testfdfdsfdsf');
        $state.go('sign-in');
      }

    }

  });

  this.logout = function (userObj) {
    authObj.$unauth();
    console.log('logged out');

  }




});