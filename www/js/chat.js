smsapp1.factory('Messages',
['$rootScope','$firebaseArray','FIREBASE_URL', function($rootScope,$firebaseArray,FIREBASE_URL){

  var messagesRef = new Firebase(FIREBASE_URL);
  return $firebaseArray(messagesRef);
}]);
