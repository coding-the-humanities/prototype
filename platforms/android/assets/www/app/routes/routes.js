app.config(['$stateProvider', function($stateProvider){

  $stateProvider.state('login',{
    url:'/login',
    controller: 'LoginController',
    templateUrl:'app/authentication/login.html'
  })
  .state('app',{
    abstract: true,
    url:'/app',
    templateUrl:'app/layouts/app.html'
  })
  .state('app.profile',{
    url:'/profile',
    views: {
      'tab-profile': {
        templateUrl:'app/users/profile.html',
        controller:'ProfileController'
      }
    }
  })
  .state('app.objectives',{
    url:'/objectives',
    views: {
      'tab-objectives': {
        templateUrl:'app/objectives/objectives.html',
        controller:'objectivesController as objectives'
      }
    }
  })
  .state('app.objective',{
    url:'/card/:objectiveId',
    views: {
      'tab-card': {
        templateUrl:'app/cards/card.html',
        controller:'cardController'
      }
    }
  });

}]);
