app.controller('ProfileController', function($scope, userSession){
  $scope.user = userSession.user;

  $scope.logout=function(){
    userSession.auth.$logout();
  }
});
