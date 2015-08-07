'use strict';

var gulp = require('gulp');
var fs = require('fs');

/**
 * @see https://www.npmjs.com/package/gulp-phpunit
 * @see https://github.com/mikeerickson/gulp-phpunit
 */
var phpunit = require('gulp-phpunit');

if (! fs.exists('./vendor/bin/phpunit')) {
  console.warn('You must run `composer install` to install phpunit');
  process.exit(1);
}

gulp.task('test', function() {
  gulp
    .src('./phpunit.xml')
    .pipe(phpunit('./vendor/bin/phpunit', {
      colors: true,
      silent: true
    }))
    .on('error', function(e) {
      console.warn(e.message);
      this.emit('end');
    });
});

gulp.task('watch', function(){
  gulp.watch(['src/*.php','tests/*Test.php'], ['test']);
});

gulp.task('default', ['test','watch']);
