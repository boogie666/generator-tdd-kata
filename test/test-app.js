'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('tdd-kata:app', function (done) {

  before(function (done) {
    done();
  });

  it('creates js-mocha kata', function (done) {

    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
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
          'tests/StringCalculatorTest.js',
          'package.json',
          '.jshintrc'
        ]);

        done();
      });
  });
});
