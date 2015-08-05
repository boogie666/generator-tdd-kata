'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var caser = require('stringcase');
var path = require('path');
var fs = require('fs');


function determineOutputFileName(context, fileName) {
  return fileName
    // double lodash prefix indicates a dotfile
    .replace(/^__/, '.')
    // otherwise, simply remove the lodash
    .replace(/^_/, '')
    // interpolate kata name into output filenames
    .replace(/\{kata_name\}/, caser.pascalcase(context.kataName));
}


// katas and stacks
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
        this.templatePath(path.join('katas', this.kata + '.md')),
        this.destinationPath('README.md')
      );
    },

    projectfiles: function () {

      var context = {
        name : this.name,
        kataName : this.kata
      };

      var contents = fs.readdirSync(path.join(__dirname, 'templates', 'stacks', this.stack));
      var self = this;

      contents.forEach(function(current) {
        var currentPath = path.join(__dirname, 'templates', 'stacks', self.stack, current);
        if (fs.statSync(currentPath).isFile()) {
          self.template(
            path.join('stacks', self.stack, current),
            determineOutputFileName(context, current),
            context
          );
        }
      });

      var relAppFile = 'src/{kata_name}.js';
      this.template(
        path.join('stacks', this.stack, relAppFile),
        determineOutputFileName(context, relAppFile),
        context
      );

      var relTestFile = 'tests/{kata_name}.test.js';
      this.template(
        path.join('stacks', this.stack, relTestFile),
        determineOutputFileName(context, relTestFile),
        context
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  },

});
