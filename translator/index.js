'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TranslatorGenerator = module.exports = function TranslatorGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the translator subgenerator with the argument ' + this.name + '.');
};

util.inherits(TranslatorGenerator, yeoman.generators.NamedBase);

TranslatorGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
