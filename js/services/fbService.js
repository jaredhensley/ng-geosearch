angular.module('myApp').service('fbService', function ($firebaseArray, $firebaseObject, $firebaseAuth, $state) {

  var baseUrl = 'https://ng-geosearch.firebaseio.com/'
  var ref = new Firebase(baseUrl);


  var authObj = $firebaseAuth(ref);



  var loggedInUserRef;

  this.getAuthObj = function () {
    return authObj;
  }

  this.login = function (userObj) {
    console.log('line 18 in fb service userObj', userObj);
    authObj.$authWithPassword(userObj).then(function (response) {

      console.log(response);
    });

  }

  this.register = function (userObj) {
    console.log(userObj);
    authObj.$createUser(userObj).then(function (userData) {
      console.log(userData);
      var usersRef = new Firebase(baseUrl + 'users/' + userData.uid);
      var newUser = $firebaseObject(usersRef);
      newUser.email = userObj.email;
      newUser.uid = userData.uid;
      newUser.$save();
      authObj.$authWithPassword(userObj).then(function (response) {
        console.log('testttt');
      });

    });

  }

  authObj.$onAuth(function (response) {

    if (response) {
      $state.go('home');


    } else {
      if ($state) {
        $state.go('sign-in');
      }

    }

  });

  this.logout = function (userObj) {
    authObj.$unauth();
    $state.go('sign-in');

  }

  this.getImages = function (userId) {



  }




});