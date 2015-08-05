'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('tdd-kata:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        name : 'some_name',
        type : 'string-calculator'
      })


      .on('end', done);
  });

  it('creates javascript files', function () {
    assert.file([
      'README.MD',
      'gulpfile.js',
      'src/string-calculator.js',
      'src/string-calculatorTest.js',
      'package.json',
      '.jshintrc'
    ]);
  });
});
