app.controller('objectivesController', function(currentUser, objectives){

  var vm = this;

  vm.objectives = [];

  vm.addObjective = function(objective){
    currentUser.addObjective(objective)
  }
  
  initialize()

  return vm;

  function initialize(){
    objectives.getObjectives().then(function(items){
      currentUser.get().then(function(user){
        var userObjectives = user.objectives;
        var addedObjectives = objectives.checkIfAdded(items, userObjectives);
        vm.objectives = addedObjectives;
      }, function(error){
        vm.objectives = items;
      });
    });
  }
});
