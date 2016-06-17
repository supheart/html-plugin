'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./carousel-figure/carousel-figure.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./carousel-figure'));
});

gulp.task('watch', function () {
    gulp.watch('./carousel-figure/carousel-figure.scss', ['sass']);
});
