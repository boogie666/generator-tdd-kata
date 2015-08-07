'use strict';

var gulp = require('gulp');
var fs = require('fs');

/**
 * @see https://www.npmjs.com/package/gulp-phpspec
 * @see https://github.com/mikeerickson/gulp-phpspec
 */
var phpspec = require('gulp-phpspec');

if (! fs.existsSync('./vendor/bin/phpspec')) {
  console.warn('You must run `composer install` to install phpunit');
  process.exit(1);
}

gulp.task('test', function() {
  gulp
    .src('phpsec.yml')
    .pipe(phpspec('./vendor/bin/phpspec run'))
    .on('error', function(e) {
      console.warn(e.message);
      this.emit('end');
    });
});

gulp.task('watch', function(){
  gulp.watch(['src/*.php','spec/*Spec.php'], ['test']);
});

gulp.task('default', ['test','watch']);
