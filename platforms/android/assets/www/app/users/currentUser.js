app.factory('currentUser', function($q, userSession, $localForage){

  return {
    set: set,
    get: get,
    initialize: initialize,
    addObjective: addObjective,
    removeObjective: removeObjective,
  }

  function set(user){
    $localForage.setItem('currentUser', user);
  }

  function initialize(user){
    var newUser = {
      name: user.displayName,
      objectives: {}
    }

    get().then(function(storedUser){
      if(!storedUser.name === user.displayName){
        set(newUser);
      }
    }, function(error){
      set(newUser);
    });
  }

  function get(){
    var deferred = $q.defer();

    $localForage.getItem('currentUser').then(function(user){
      if(!user){
        return deferred.reject('error');
      } 
      return deferred.resolve(user);
    });

    return deferred.promise;
  }

  function addObjective(objective){
    get().then(function(user){
      user.objectives[objective.id] = objective;
      objective.added = true;
      set(user);
    }, function(error){
      console.log(error);
    });
  }

  function removeObjective(objective){
    get().then(function(user){
      delete user.objectives[objective.id]
      objective.added = false;
      set(user);
    }, function(error){
      console.log(error);
    });
  }
});
