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
