(function(){

  let tasks = [
    {
      title: "Clean Up"
    },
    {
      title: "Tidy Up"
    },
    {
      title: "Do Dishes"
    },
    {
      title: "Make the Bed"
    }
  ];

  let objectives = [
    {
      title: "html",
      level: 0,
      completed: 50,
    },
    {
      title: "css",
      level: 0,
      completed: 25
    },
    {
      title: "gists",
      level: 0
    },
    {
      title: "custom elements",
      level: 1,
      completed: 80
    },
    {
      title: "attributes",
      level: 1
    },
    {
      title: "simple script",
      level: 2,
      completed: 70
    },
    {
      title: "code organization",
      level: 2,
      completed: 30
    },
    {
      title: "modularization",
      level: 2,
      completed: 90
    },
    {
      title: "git",
      level: 3,
      completed: 30
    },
    {
      title: "api's",
      level: 4
    },
    {
      title: "persistance",
      level: 4,
      completed: 70
    },
    {
      title: "forms",
      level: 5,
      completed: 80
    },
    {
      title: "real time",
      level: 5,
      completed: 10
    }
  ];

  _(objectives).map(function(objective){
    let level;
    if(objective.level < 10){
      level = `00${objective.level}`;
    } else if(objective.level < 100){
      level = `0${objective.level}`;
    } else {
      level = `${objective.level}`;
    }

    objective.tasks = tasks;
    objective.id = `${level}_${objective.title}`;
    return objective;
  });

  localforage.setItem('objectives', objectives);
})();
