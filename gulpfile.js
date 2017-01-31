'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
 return gulp.src('styles/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
});


gulp.task('default', ['sass']);