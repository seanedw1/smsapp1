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



.controller('ChatCtrl',
['$scope','Messages',
function($scope, Messages) {

$scope.addMessage = function(res) {
  Messages.add();
};


}]); //controller
