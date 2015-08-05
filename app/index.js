'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fs = require('fs');

var availableKatas = fs.readdirSync(path.join(__dirname, 'templates', 'katas')).map(function(filename) {
  return filename.replace(/\.md$/, '');
});

var availableStacks = fs.readdirSync(path.join(__dirname, 'templates', 'stacks'));

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('tdd-kata') + ' generator!'
    ));

    var prompts = [
      {
        name: 'name',
        message: 'What is your name',
        default : process.env.USER
      },
      {
        name : 'kata',
        type : 'list',
        message : 'What type of kata?',
        choices : availableKatas,
        default : 'string-calculator'
      },
      {
        name : 'stack',
        type : 'list',
        message : 'What testing stack?',
        choices : availableStacks,
        default : 'js-mocha'
      }
    ];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.kata = props.kata;
      this.stack = props.stack;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath(path.join('stacks', this.stack, '_package.json')),
        this.destinationPath('package.json')
      );
      this.fs.copy(
          this.templatePath(path.join('stacks', this.stack, '_gulpfile.js')),
          this.destinationPath('gulpfile.js')
      );

      var context = {
        name : this.name,
        kataName : this.kata
      };

      this.template(path.join('stacks', this.stack, '_package.json'), 'package.json', context);

      this.fs.copy(
        this.templatePath(path.join('stacks', this.stack, 'jshintrc')),
        this.destinationPath('.jshintrc')
      );

      this.fs.copy(
        this.templatePath(path.join('katas', this.kata + '.md')),
        this.destinationPath('README.md')
      );
   },

    projectfiles: function () {
      var relAppFile = 'src/app_file.js';
      this.fs.copy(
        this.templatePath(path.join('stacks', this.stack, relAppFile)),
        this.destinationPath(relAppFile.replace(/app_file/, this.kata))
      );

      var context = {
        name : this.kata
      };

      var relTestFile = 'src/test_file.js';
      this.template(
        path.join('stacks', this.stack, relTestFile),
        relTestFile.replace(/test_file/, this.kata + 'Test'),
        context
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
