'use strict';
const gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    path = require('path');

const gulpConfig = require('./gulp.config').config;

const srcPath = path.join(gulpConfig.basePath, gulpConfig.sassGlob);

gulp.task('sass', function () {
    return gulp.src(srcPath)
        .pipe(gulpSass({outputStyle: 'compressed'}).on('error', gulpSass.logError))
        .pipe(gulp.dest(gulpConfig.buildPath));
});

gulp.task('sass:watch', function () {
    gulp.watch(srcPath, ['sass']);
});
