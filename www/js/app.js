// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('prototype', ['ionic', 'firebase']);

app.value('FIREBASE_REF','https://mobile-app.firebaseio.com/')
app.value('userSession',{});
app.value('Card',Card);
app.value('_', _);

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
    $state.go('app.card');
  });

  $rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
    console.log('Error logging user in: ', error);
  });

  $rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
    $state.go('login');
  });
})

app.config(['$stateProvider', function($stateProvider){
  $stateProvider.state('login',{
    url:'/login',
    controller: 'LoginController',
    templateUrl:'views/login.html'
  })
  .state('app',{
    abstract: true,
    url:'/app',
    controller:'ProfileController',
    templateUrl:'views/app.html'
  })
  .state('app.profile',{
    url:'/profile',
    views: {
      'tab-profile': {
        templateUrl:'views/profile.html'
      }
    }
  })
  .state('app.objectives',{
    url:'/objectives',
    views: {
      'tab-objectives': {
        templateUrl:'views/objectives.html'
      }
    }
  })
  .state('app.card',{
    url:'/card',
    views: {
      'tab-card': {
        templateUrl:'views/card.html'
      }
    }
  });
}]);


app.controller('LoginController',['$scope','FIREBASE_REF','$firebaseSimpleLogin','userSession',function($scope,FIREBASE_REF,$firebaseSimpleLogin,userSession){
  userSession.auth=$firebaseSimpleLogin(new Firebase(FIREBASE_REF));

  $scope.login=function(provider){
    userSession.auth.$login(provider);
  }
}]);

app.controller('ProfileController',['$scope', '$state', 'userSession', 'Card', function($scope, $state, userSession, Card){

  $scope.user = userSession.user;

  $scope.goHome = function(){
   $state.go('app.card');
  }

  $scope.card = new Card;

  var objectives = [
    {
      title: "html",
      level: 0,
      completed: 50
    },
    {
      title: "css",
      level: 0,
      completed: 25
    },
    {
      title: "gists",
      level: 0
    },
    {
      title: "custom elements",
      level: 1,
      completed: 80
    },
    {
      title: "attributes",
      level: 1
    },
    {
      title: "simple script",
      level: 2,
      completed: 70
    },
    {
      title: "code organization",
      level: 2,
      completed: 30
    },
    {
      title: "modularization",
      level: 2,
      completed: 90
    },
    {
      title: "git",
      level: 3,
      completed: 30
    },
    {
      title: "api's",
      level: 4
    },
    {
      title: "persistance",
      level: 4,
      completed: 70
    },
    {
      title: "forms",
      level: 5,
      completed: 80
    },
    {
      title: "real time",
      level: 5,
      completed: 10
    }
  ]
  $scope.groupedObjectives = _(objectives).groupBy('level').value();
  console.log($scope.groupedObjectives);

  $scope.objectives = objectives;

  $scope.logout=function(){
    userSession.auth.$logout();
  }
}]);
