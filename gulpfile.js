var gulp = require('gulp');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

gulp.task('uglify-js', function() {
    var src = 'js/**/*.js';
    var dist = 'dist';

    return gulp.src(src)
    .pipe(replace('/js/', '/dist/'))
    .pipe(uglify())
    .pipe(gulp.dest(dist))
});

gulp.task('copy-html', function() {
    var src = 'js/**/*.html';
    var dist = 'dist';

    return gulp.src(src)
    .pipe(gulp.dest(dist))
});