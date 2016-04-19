var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    filter     = require('gulp-filter'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename'),
    connect    = require('gulp-connect'),
    stylus     = require('gulp-stylus'),
    coffee     = require('gulp-coffee'),
    plumber    = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    watch      = require('gulp-watch'),
    csso       = require('gulp-csso'),
    jade       = require('gulp-jade'),
    assets     = require('gulp-bower-assets'),
    runseq     = require('run-sequence')
    //bower      = require('main-bower-files')
    //bowerSrc   = require('gulp-bower-src')
    
var config = {
  prefix: false
}

gulp.task('bower-bundle', function() {
  gulp.src('./assets.json')
    .pipe(assets(config))
    .pipe(gulp.dest('assets'));
  
});

gulp.task('bower-minify-css', function() {
    setTimeout(function(){}, 2000)
    gulp.src('assets/all.css')
      .pipe(plumber())
      .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets'))
});

gulp.task('bower-minify-js', function() {
    setTimeout(function(){}, 2000)
    gulp.src('assets/all.js')
      .pipe(plumber())
      .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets'))
});


gulp.task('server', function() {
    connect.server({
      livereload: true,
      listen: 8090
    });
});

gulp.task('jade', function() {
    gulp.src('src/index.jade')
      .pipe(plumber())
      .pipe(jade())
      .pipe(gulp.dest('.'))
});

gulp.task('coffee', function() {
    gulp.src('src/*.coffee')
        .pipe(plumber())
        .pipe(coffee({bare:true}))
        .pipe(sourcemaps.init())
          .pipe(concat('bundle.js'))
          .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets'))
});

gulp.task('stylus', function() {
    gulp.src('src/*.stylus')
        .pipe(stylus())
        .pipe(sourcemaps.init())
          .pipe(concat('styles.css'))
          .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets'))
});

gulp.task('livereload', function() {
  gulp.src(['assets/*.css', 'assets/*.js', './index.html'])
    .pipe(plumber())
    .pipe(watch(['assets/*.css', 'assets/*.js', './index.html']))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('src/*.stylus', ['stylus']);
  gulp.watch('src/*.coffee', ['coffee']);
  gulp.watch('src/index.jade', ['jade']);
  gulp.watch('bower_components/**', ['bower']);
});

gulp.task('bower', function(callback) {
  runseq('bower-bundle', 
  ['bower-minify-css', 'bower-minify-js'], callback);
  setTimeout(function(){
    runseq('bower-minify-css', 'bower-minify-js')
  }, 2000)
});

gulp.task('build', [
  'coffee',
  'stylus',
  'jade',
  'bower'
  //'svgmin',
]);

gulp.task('default', [
  'build',
  'server',
  'livereload',
  'watch'
]);
