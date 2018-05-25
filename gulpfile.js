'use strict';
const gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    path = require('path');

const gulpConfig = require('./gulp.config').config;

const srcPath = path.resolve(gulpConfig.basePath);

gulp.task('sass', function () {
    return gulp.src(srcPath)
        .pipe(gulpSass({outputStyle: 'compressed'}).on('error', gulpSass.logError))
        .pipe(gulp.dest(gulpConfig.buildPath));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});
