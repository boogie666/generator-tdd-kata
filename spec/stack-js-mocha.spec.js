'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var path = require('path');
var os = require('os');
var shell = require('shelljs');

describe('js-mocha kata stack', function (done) {

  var tempTestingDir = path.join(os.tmpdir(), './temp-test');

  it('installs the correct files', function (done) {

    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(tempTestingDir)
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        name  : 'some_name',
        kata  : 'string-calculator',
        stack : 'js-mocha'
      })
      .on('end', function() {
        assert.file([
          'README.md',
          'gulpfile.js',
          'src/StringCalculator.js',
          'spec/StringCalculator.spec.js',
          'package.json',
          '.gitignore',
          '.jshintrc'
        ]);

        done();
      });
  });

  it('can properly run a failing test after installation', function(done) {

    this.timeout(20000);

    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(tempTestingDir)
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        name  : 'some_name',
        kata  : 'string-calculator',
        stack : 'js-mocha'
      })
      .on('end', function() {
        shell.exec('npm install', {
          silent: true
        });

        var results = shell.exec('npm test', {
          silent: true
        });

        // failing initial test should return non-zero status
        assert.notEqual(results.code, 0, '`npm test` failed to return a non-zero status');
        assert(results.output.match(/StringCalculator variable should not be null/), '`npm test` output should complain that StringCalculator should not be null');

        results = shell.exec('gulp test', {
          silent: true
        });

        assert(results.output.match(/Using gulpfile /), '`gulp test` output should include text "Using glupfile"');
        assert(results.output.match(/0 passing/), '`gulp test` output should report 0 passing tests');
        assert(results.output.match(/1 failing/), '`gulp test` output should report 1 failing test');
        assert(results.output.match(/StringCalculator variable should not be null/), '`gulp test` output should complain that StringCalculator should not be null');

        done();
      });
  });

});
