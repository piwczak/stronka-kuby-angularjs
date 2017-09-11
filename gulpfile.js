var gulp = require('gulp');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var del = require('del');
var replaceName = require('gulp-replace-name');
var replace = require('gulp-replace');
var embedTemplates = require('gulp-angular-embed-templates');

gulp.task('uglify-concat-js', function() {
    var dist = 'dist';

    return gulp.src('src/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', replace(/(\/js\/)/g, '')))
    .pipe(gulpIf('*.js', embedTemplates()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('index.html', replace(/(\.\/css\/.*)(.css)/g, '$1.min$2')))
    .pipe(gulpIf('index.html', replace(/(\.\/lib\/.*)(.js)/g, '$1.min$2')))
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

gulp.task('delete-dev-css-js', function() {
    del(['dist/css/*.css', '!dist/css/*.min.css']);
    del(['dist/lib/*.js', '!dist/lib/*.min.js'])
});

gulp.task('clear-dist', function() {
    del(['dist/**', '!dist'])
});

gulp.task('prod-mode', function(callback){
    runSequence('clear-dist', 'uglify-concat-js', 'copy-others', 'uglify-css', 'delete-dev-css-js', callback);
});
