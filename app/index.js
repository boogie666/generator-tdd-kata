'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var types = ['string-calculator'];

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

    var prompts = [{
      name: 'name',
      message: 'What is your name',
      default : process.env.USER
    },{
      name : 'type',
      type : 'list',
      message : 'What type of kata?',
      choices : types,
      default : 'string-calculator'
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.type = props.type;
      
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
          this.templatePath('_gulpfile.js'),
          this.destinationPath('gulpfile.js'));
      var context = {
        name : this.name,
        kataName : this.type
      };
      this.template('_package.json', 'package.json', context);
      
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc'));

      this.fs.copy(
          this.templatePath(this.type+'/'+'README.MD'),
          this.destinationPath('README.MD'));

       
   },

    projectfiles: function () {
      this.fs.copy(this.templatePath('src/app_file.js'),
        this.destinationPath('src/'+this.type+'.js'));

      var context = {
        name : this.type
      };
      this.template('src/test_file.js', 'src/' + this.type + '.test.js', context);
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
