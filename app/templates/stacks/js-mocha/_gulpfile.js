var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    chai = require('chai');

chai.config.showDiff = false;
chai.should();

Error.stackTraceLimit = 2;

gulp.task('test', function() {
  gulp.src('src/**/*Test.js', {
    read: false
  }).pipe(mocha()).on('error', function(e){
    console.warn(e.message);
    this.emit('end');
  });
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['test']);
});

gulp.task('default', ['test','watch']);
