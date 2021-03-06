smsapp1.factory('Authentication',
  ['$rootScope', '$firebaseAuth', '$firebaseObject',
  '$location', 'FIREBASE_URL','$state','$ionicHistory',
  function($rootScope, $firebaseAuth, $firebaseObject,
    $location, FIREBASE_URL, $state, $ionicHistory) {

  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  auth.$onAuth(function(authUser) {
    if (authUser) {
      var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid );
      var userObj = $firebaseObject(userRef);
      $rootScope.currentUser = userObj;
      console.log("logged in" );
      $ionicHistory.nextViewOptions({
   disableBack: true
 });

      $state.go('app.profile');
    } else {
      $rootScope.currentUser = '';
      console.log("not logged in");
      $state.go('app.login');
    }
  });


  var myObject = {
    login: function(user) {
      auth.$authWithPassword({
        email: user.email,
        password: user.password
      }).then(function(regUser) {

      }).catch(function(error) {
       $rootScope.message = error.message;
      });
    }, //login

    logout: function() {
      return auth.$unauth();
    }, //logout

    requireAuth: function() {
      return auth.$requireAuth();
    }, //require Authentication

    register: function(user) {
      console.log('user', user);
      auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function(regUser) {

        var firebaseUser = $firebaseObject(new Firebase(FIREBASE_URL + 'users/'+ regUser.uid))
        firebaseUser.date = Firebase.ServerValue.TIMESTAMP;
        firebaseUser.username = user.username;
        firebaseUser.email =  user.email;
        firebaseUser.$save();
        myObject.login(user);

      }).catch(function(error) {
        $rootScope.message = error.message;
      }); // //createUser
    } // register
  };

  return myObject;
}]); //factory
