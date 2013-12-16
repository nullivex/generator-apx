'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TaskGenerator = module.exports = function TaskGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the task subgenerator with the argument ' + this.name + '.');
};

util.inherits(TaskGenerator, yeoman.generators.NamedBase);

TaskGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
