'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var path = require('path');
var os = require('os');

describe('php-phpspec kata stack', function (done) {

  it('installs the correct files', function(done) {
    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({
        'skip-install': true
      })
      .withPrompt({
        name  : 'some_name',
        kata  : 'bowling-game',
        stack : 'php-phpspec'
      })

      .on('end', function() {
        assert.file([
          'README.md',
          'gulpfile.js',
          'src/BowlingGame.php',
          'spec/BowlingGameSpec.php',
          'package.json',
          'composer.json',
          'phpspec.yml',
          '.gitignore'
        ]);

        done();
      });
  });

});
