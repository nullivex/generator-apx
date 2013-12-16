'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var InitializerGenerator = module.exports = function InitializerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the initializer subgenerator with the argument ' + this.name + '.');
};

util.inherits(InitializerGenerator, yeoman.generators.NamedBase);

InitializerGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
