'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var path = require('path');
var os = require('os');

describe('php-unit kata stack', function () {

  it('installs the correct files', function(done) {
    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        name  : 'some_name',
        kata  : 'fizz-buzz',
        stack : 'php-phpunit'
      })

      .on('end', function() {
        assert.file([
          'README.md',
          'gulpfile.js',
          'src/FizzBuzz.php',
          'tests/FizzBuzzTest.php',
          'package.json',
          'composer.json',
          'phpunit.xml',
          '.gitignore'
        ]);

        done();
      });
  });

});
