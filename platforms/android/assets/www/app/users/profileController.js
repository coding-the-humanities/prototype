app.controller('ProfileController', function($scope, currentUser, userSession){

  $scope.user = currentUser.get();

  $scope.logout = function(){
    userSession.auth.$logout();
  }
});
