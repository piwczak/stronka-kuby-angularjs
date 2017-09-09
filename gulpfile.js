var gulp = require('gulp');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var del = require('del');
var replaceName = require('gulp-replace-name');

gulp.task('uglify-concat-js', function() {
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

gulp.task('copy-others', function() {
    return gulp.src(['src/css/**/*', 'src/files/**/*', 'src/fonts/**/*', 'src/img/**/*', 'src/lib/**/*'], {base: 'src/'})
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify-css', function() {
    var src = ['src/css/styles.css', 'src/css/fontello.css'];
    var dist = 'dist/css';
    return gulp.src(src, {base: 'src/css'})
    .pipe(cleanCSS())
    .pipe(replaceName(/\.css/, '.min.css'))
    .pipe(gulp.dest(dist));
});

gulp.task('delete-styles.css', function() {
    del(['dist/css/styles.css', 'dist/css/bootstrap.css', 'dist/css/fontello.css']);
});

gulp.task('prod-mode', function(callback){
    runSequence(['uglify-concat-js', 'copy-html-temps', 'copy-others'], 'uglify-css', 'delete-styles.css', callback);
});
