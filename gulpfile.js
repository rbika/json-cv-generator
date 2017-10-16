// Gulpfile

var gulp = require('gulp');
var data = require('gulp-data');
var rename = require('gulp-rename');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('generate', function() {
  return gulp
    .src('./src/template.html')
    .pipe(data(function() {return require('./src/data.json')}))
    .pipe(nunjucksRender())
    .pipe(rename('cv.html'))
    .pipe(gulp.dest('./'));
});

// Default task
gulp.task('default', ['generate']);
