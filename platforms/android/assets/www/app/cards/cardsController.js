app.controller('cardController', function($scope, objectives, $stateParams, Card){
  var id = ($stateParams.objectiveId);
  $scope.card = {};

  objectives.getObjective(id).then(function(objective){
    console.log(objective)
    $scope.card = objective;
  });
});
