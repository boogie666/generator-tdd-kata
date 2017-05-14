'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var caser = require('stringcase');
var path = require('path');
var fs = require('fs');
var glob = require('glob');

// katas and stacks
var availableKatas = fs
  .readdirSync(path.join(__dirname, 'templates', 'katas'))
  .map(function stripFileExtension(filename) {
    return filename.replace(/\.md$/, '');
  });

var availableStacks = fs.readdirSync(
  path.join(__dirname, 'templates', 'stacks')
);

function determineOutputFileName(context, fileName) {
  return fileName
    // double lodash prefix indicates a dotfile
    .replace(/^__/, '.')
    // otherwise, simply remove the lodash
    .replace(/^_/, '')
    // interpolate kata name into output filenames
    .replace(/\{kata_name\}/, context.kata.pascalized);
}

module.exports = yeoman.generators.Base.extend({
  initializing: function initialize() {
    this.pkg = JSON.parse(
      fs.readFileSync(path.join(__dirname, '..', 'package.json'))
    );
  },

  prompting: function promptUser() {
    var done = this.async();

    var prompts = [
      {
        name: 'name',
        message: 'What is your name',
        default: process.env.USER
      },
      {
        name: 'kata',
        type: 'list',
        message: 'What type of kata?',
        choices: availableKatas,
        default: 'string-calculator'
      },
      {
        name: 'stack',
        type: 'list',
        message: 'What testing stack?',
        choices: availableStacks,
        default: 'js-mocha'
      }
    ];

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('tdd-kata') + ' generator!'
    ));

    this.prompt(prompts, function displayPrompts(props) {
      this.version = '1.0.0';
      this.name = props.name;
      this.kata = props.kata;
      this.stack = props.stack;

      done();
    }.bind(this));
  },

  writing: {
    app: function createReadme() {
      this.fs.copy(
        this.templatePath(path.join('katas', this.kata + '.md')),
        this.destinationPath('README.md')
      );
    },

    projectfiles: function generateProjectFiles() {
      var context = {
        version: this.version,
        name: this.name,
        kata: {
          slug: this.kata,
          pascalized: caser.pascalcase(this.kata)
        }
      };

      // list all file paths recursively, excluding directories
      var contents = glob.sync('**', {
        cwd: path.join(__dirname, 'templates', 'stacks', this.stack),
        nodir: true
      });

      var self = this;
      contents.forEach(function generateTemplateFile(current) {
        self.template(
          path.join('stacks', self.stack, current),
          determineOutputFileName(context, current),
          context
        );
      });
    }
  },

  install: function install() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
