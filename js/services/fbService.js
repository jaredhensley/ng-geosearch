angular.module('myApp').service('fbService', function ($firebaseArray, $firebaseObject, $firebaseAuth, $state) {

  var baseUrl = 'https://ng-geosearch.firebaseio.com/'
  var ref = new Firebase(baseUrl);


  var authObj = $firebaseAuth(ref);



  var loggedInUserRef;

  this.getAuthObj = function () {
    return authObj;
  }

  this.login = function (userObj) {

    authObj.$authWithPassword(userObj).then(function (response) {

      console.log('in the database');
      console.log(response);

    });

  }

  this.register = function (userObj) {
    authObj.$createUser(userObj).then(function (userData) {

      var usersRef = new Firebase(baseUrl + 'users/' + userData.uid);
      var newUser = $firebaseObject(usersRef);
      newUser.email = userObj.email;
      newUser.uid = userData.uid;
      newUser.$save();
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

  this.getImages = function (userId) {



  }




});