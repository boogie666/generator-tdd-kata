'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var path = require('path');
var os = require('os');

describe('js-mocha kata stack', function (done) {

  it('installs the correct files', function (done) {

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
          'tests/StringCalculator.test.js',
          'package.json',
          '.gitignore',
          '.jshintrc'
        ]);

        done();
      });
  });

});
