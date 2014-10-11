app.controller('objectivesController', function(objectives, $state, userSession){

  var vm = this;

  vm.objectives = [];

  vm.goHome = function(objectiveId){
    $state.go('app.objective', {objectiveId: objectiveId});
  }

  vm.addObjective = function(objective){

    if(!userSession.user.objectives){
      userSession.user.objectives = {};
    }

    objective.tasks = objective.tasks.map(function(task){
      task.completed = false;
      return task;
    });

    userSession.user.objectives[objective.id] = objective;

    objective.added = true;
    console.log(userSession);
  }

  objectives.getObjectives().then(function(data){
    vm.objectives = data;
  });
});
