app.controller('cardController', function($scope, objectives, $stateParams, Card){
  var id = ($stateParams.objectiveId);
  $scope.card = {};

  objectives.getObjective(id).then(function(objective){
    $scope.card = objective;
  });
});
