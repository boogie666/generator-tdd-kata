'use strict';

var gulp = require('gulp');
var mocha = require('gulp-phpspec');
var chai = require('chai');

chai.config.showDiff = false;
chai.should();

Error.stackTraceLimit = 2;

gulp.task('test', function() {
  gulp.src('spec/**Spec.php', {
    read: false
  }).pipe(phpspec()).on('error', function(e){
    console.warn(e.message);
    this.emit('end');
  });
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['test']);
});

gulp.task('default', ['test','watch']);


return;
// example from https://www.npmjs.com/package/gulp-phpspec


// option 1: default format
gulp.task('phpspec', function() {
    gulp.src('phpsec.yml').pipe(phpspec());
});

// option 2: with defined bin and options
gulp.task('phpspec', function() {
    var options = {debug: false};
    gulp.src('phpspec.yml').pipe(phpspec('./vendor/bin/phpspec run',options));
});

// option 3: supply callback to integrate something like notification (using gulp-notify)

var gulp = require('gulp'),
 notify  = require('gulp-notify'),
 phpspec = require('gulp-phpspec'),
 _       = require('lodash');

  gulp.task('phpspec', function() {
    gulp.src('phpspec.yml')
      .pipe(phpspec('', {notify: true}))
      .on('error', notify.onError(testNotification('fail', 'phpspec')))
      .pipe(notify(testNotification('pass', 'phpspec')));
  });

function testNotification(status, pluginName, override) {
    var options = {
        title:   ( status == 'pass' ) ? 'Tests Passed' : 'Tests Failed',
        message: ( status == 'pass' ) ? '\n\nAll tests have passed!\n\n' : '\n\nOne or more tests failed...\n\n',
        icon:    __dirname + '/node_modules/gulp-' + pluginName +'/assets/test-' + status + '.png'
    };
    options = _.merge(options, override);
  return options;
}
