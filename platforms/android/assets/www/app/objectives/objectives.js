app.factory('objectives', function($q, $localForage, _){
  return {
    getObjectives: getObjectives,
    getObjective: getObjective,
    checkIfAdded: checkIfAdded
  }

  function getObjectives(){
    return $localForage.getItem('objectives');
  }

  function getObjective(id){
    var deferred = $q.defer()

    getObjectives().then(function(objectives){
      var objective = _(objectives).find(function(objective){
        if(objective.tasks){
          objective.tasks = objective.tasks.map(function(task){
            task.completed = false;
            return task;
          });
        }
        return objective.id === id;
      });
      deferred.resolve(objective);
    })

    return deferred.promise;
  }

  function checkIfAdded(all, selection){
    return all.map(function(objective){
      var added = _(selection).find({'id': objective.id});
      if(added){
        objective.added = true;
      }
      return objective;
    });
  }
});
