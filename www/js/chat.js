smsapp1.factory('Messages',
['$firebaseArray','FIREBASE_URL','$scope', function($firebaseArray,FIREBASE_URL,$scope){

  var messagesRef = new Firebase(FIREBASE_URL);
  $scope.messages = $firebase(messagesRef);


myObject = {

add: function(){
}

};
return myObject;
}]);
