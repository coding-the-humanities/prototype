app.controller('objectivesController', function($scope){
  $scope.goHome = function(){
    $state.go('app.card');
  }

  $scope.groupedObjectives = _(objectives).groupBy('level').value();
});

