var app = angular.module('prototype', ['ionic', 'firebase']);

app.value('FIREBASE_REF','https://mobile-app.firebaseio.com/')
app.value('userSession',{});
app.value('Card',Card);
app.value('_', _);

app.run(function($ionicPlatform, $rootScope, $state, userSession) {
  $ionicPlatform.ready(function() {
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
