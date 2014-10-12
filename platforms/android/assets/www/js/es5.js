"use strict";
var Card = function Card() {
  this._id = 1;
  this._title = "Mama, What's a Humanities?";
  this._type = "Exercise";
  this._premise = "A quasi-fictional future where the academic disciplines today called Humanities no longer exist.";
  this._exercise = "Use the NYT API-Data (up until today) to explain what Humanities were to these future people.";
  this._materials = ["index cards", "posters"];
  this.tags = ['humanities', 'future', 'data visualisation', 'story telling', 'prognosis'];
};
($traceurRuntime.createClass)(Card, {
  get id() {
    return this._id;
  },
  get title() {
    return this._title;
  },
  get type() {
    return this._type;
  },
  get premise() {
    return this._premise;
  },
  get exercise() {
    return this._exercise;
  },
  get materials() {
    return this._materials;
  }
}, {});
var x = new Card();

"use strict";
(function(store) {
  var objectives = [{
    title: "html",
    level: 0,
    completed: 50
  }, {
    title: "css",
    level: 0,
    completed: 25
  }, {
    title: "gists",
    level: 0
  }, {
    title: "custom elements",
    level: 1,
    completed: 80
  }, {
    title: "attributes",
    level: 1
  }, {
    title: "simple script",
    level: 2,
    completed: 70
  }, {
    title: "code organization",
    level: 2,
    completed: 30
  }, {
    title: "modularization",
    level: 2,
    completed: 90
  }, {
    title: "git",
    level: 3,
    completed: 30
  }, {
    title: "api's",
    level: 4
  }, {
    title: "persistance",
    level: 4,
    completed: 70
  }, {
    title: "forms",
    level: 5,
    completed: 80
  }, {
    title: "real time",
    level: 5,
    completed: 10
  }];
  store.setItem('objectives', objectives);
})(localforage);
