app.controller('objectivesController', function(objectives, $state, userSession){

  var vm = this;

  vm.objectives = [];

  vm.goHome = function(objectiveId){
    $state.go('app.objective', {objectiveId: objectiveId});
  }

  if(userSession.user.objectives){
    var userObjectives = userSession.user.objectives;
  } else {
    userSession.user.objectives = {};
    userObjectives = userSession.user.objectives;
  }

  vm.addObjective = function(objective){
    objective.tasks = objective.tasks.map(function(task){
      task.completed = false;
      return task;
    });

    userSession.user.objectives[objective.id] = objective;

    objective.added = true;
  }

  objectives.getObjectives().then(function(objectives){
    vm.objectives = objectives
    vm.objectives.forEach(function(objective){
      var added = _(userObjectives).find({'id': objective.id});
      if(added){
        objective.added = true;
      }
    });
  });
});
