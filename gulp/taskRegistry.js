module.exports = (gulp) => {
    const gulpSass = require('gulp-sass'),
        flatten = require('gulp-flatten'),
        gulpConfig = require('./gulp.config').config;

    gulp.task('sass', () => {
        return gulp.src(`${gulpConfig.basePath}/${gulpConfig.sassGlob}`)
            .pipe(gulpSass({ outputStyle: 'compressed' })
                .on('error', gulpSass.logError))
            .pipe(flatten())
            .pipe(gulp.dest(gulpConfig.buildPath));
    });

    gulp.task('sass:watch', () => {
        gulp.watch(`${gulpConfig.basePath}/${gulpConfig.sassGlob}`, ['sass']);
    });
}