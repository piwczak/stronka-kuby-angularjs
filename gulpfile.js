var gulp = require('gulp');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');

gulp.task('uglify_concat', function() {
    var src = 'src/js/**/*.js';
    var dist = 'dist';

    return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest(dist));
});

gulp.task('copy-html-temps', function() {
    var src = 'src/js/**/*.html';
    var dist = 'dist/js';

    return gulp.src(src)
    .pipe(gulp.dest(dist));
});

gulp.task('copy_others', function() {
    return gulp.src(['src/css/**/*', 'src/files/**/*', 'src/fonts/**/*', 'src/img/**/*', 'src/lib/**/*'], {base: 'src/'})
        .pipe(gulp.dest('dist'));
})

