app.controller('ProfileController', function($scope, currentUser, userSession){

  $scope.user = {};

  currentUser.get().then(function(user){
    $scope.user = user;
  });

  $scope.logout = function(){
    userSession.auth.$logout();
  }
});
