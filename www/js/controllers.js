smsapp1.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('RegistrationController',
  ['$scope', 'Authentication',
  function($scope, Authentication) {

  $scope.login = function(user) {
    Authentication.login(user);

  }; //login

  $scope.logout = function() {
    Authentication.logout();
  }; //logout

  $scope.register = function(user) {
    Authentication.register(user);
  }; // register

}])

.controller('ChatCtrl',['$scope','$firebaseArray','$firebaseObject','$rootScope', function($scope,$firebaseArray,$firebaseObject,$rootScope) {

  var messagesRef = new Firebase('https://smsapp1.firebaseio.com/chat');
  $scope.messages = $firebaseArray(messagesRef);

  $scope.sendMsg = function() {
    $scope.msg.username = $rootScope.currentUser.username;
    $scope.messages.$add($scope.msg).then(function(ref) {
        $scope.msg.body = "";
    });
  };
}])

.controller('ProfileCtrl',['$scope','$firebaseObject','$rootScope', function($scope,$firebaseObject,$rootScope) {

  var ref = new Firebase('https://smsapp1.firebaseio.com/users/'+$scope.currentUser.$id);
  $scope.user = $firebaseObject(ref);

  $scope.updateUser = function () {
    $scope.user.$save().then(function(ref) {
      ref.key() === userObj.$uid; // true
    }, function(error) {
      console.log("Error:", error);
    });
  };

  $scope.DeleteUser = function () {
    $scope.user.$remove().then(function(ref) {
      ref.key() === userObj.$uid; // true
      return auth.$unauth();
    }, function(error) {
      console.log("Error:", error);
    });
  };

  // ng-models = $scope.user.whateverYouHave
  // ng-submit = updateUser
  // in updateUser() update with $scope.user
  /*

    $scope.user = $firebaseObject(ref);



  */

}]); //controller
