// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('prototype', ['ionic', 'firebase']);
app.value('FIREBASE_REF','https://mobile-app.firebaseio.com/')
  .value('userSession',{});

app.run(function($ionicPlatform, $rootScope, $state, userSession) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    $state.go('login');
  });

  $rootScope.$on('$firebaseSimpleLogin:login', function(event, user) {
    userSession.user = user;
    console.log(user);
    $state.go('profile');
  });

  $rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
    console.log('Error logging user in: ', error);
  });

  $rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
    $state.go('login');
  });
})

app.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('login',{
    url:'/login',
    controller: 'LoginController',
    templateUrl:'views/login.html'
  })
  .state('profile',{
    url:'/profile',
    controller:'ProfileController',
    templateUrl:'views/profile.html'
  });
}]);


app.controller('LoginController',['$scope','FIREBASE_REF','$firebaseSimpleLogin','userSession',function($scope,FIREBASE_REF,$firebaseSimpleLogin,userSession){
  userSession.auth=$firebaseSimpleLogin(new Firebase(FIREBASE_REF));

  $scope.login=function(provider){
    userSession.auth.$login(provider);
  }
}]);

app.controller('ProfileController',['$scope','userSession',function($scope,userSession){

  $scope.user = userSession.user;

  $scope.card = new Card;

  $scope.logout=function(){
    userSession.auth.$logout();
  }
}]);
