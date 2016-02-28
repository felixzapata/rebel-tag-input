'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function(){
    gulp.src('lib/rebel-tag-input.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('compiled'))
});



// Watch Files For Changes
gulp.task('default', function () {
  gulp.watch(['lib/rebel-tag-input.js'], ['babel']);
});

