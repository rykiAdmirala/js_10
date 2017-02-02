'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
 
gulp.task('sass', function () {
 return gulp.src('styles/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('styles/css'))
  .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'sass:watch', 'connect']);