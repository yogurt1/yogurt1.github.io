var gulp = require('gulp')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var watch = require('gulp-watch')
var connect = require('gulp-connect')
var webpack = require('webpack-stream')
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var coffee = require('gulp-coffee')
var jade = require('gulp-jade')
var compass = require('gulp-compass')
var csso = require('gulp-csso')
var path = require('path')

webpackSrc = [
  './src/entry.js',
  './src/app.jsx',
  './src/components/*',
  './webpack.config.js'
]

compassSrc = [
  'src/sass/all.sass',
  //'src/sass/screen.scss',
  'src/sass/print.sass'
]

gulp.task('server', () => {
  connect.server({
    livereload: true,
    port: 1337
  })
})

gulp.task('cooffee', () => {
  gulp.src('src/scripts/*.coffee')
    .pipe(plumber())
    .pipe(sourcemaps.init)
      .pipe(coffee({
        bare: true
      }))
      .pipe(concat('app.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(uglify)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
    .pipe(connect.reload())
})

gulp.task('jade', () => {
  gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('.'))
    .pipe(connect.reload())
})

gulp.task('webpack', () => {
  gulp.src('src/entry.js')
    .pipe(plumber())
    .pipe(webpack(
      ( process.env.NODE_ENV == 'development' ) ?
      require('./webpack.config..development.js') :
      require('./webpack.config.js')
    ))
    .pipe(gulp.dest('assets'))
    .pipe(connect.reload())
})

gulp.task('compass', () => {
    gulp.src(compassSrc)
      .pipe(plumber())
      .pipe(sourcemaps.init())
        .pipe(compass({
          config_file: './src/config.rb',
          sass: './src/sass',
          css: './assets'
        })).on('error', (err) => {
          console.log(err)
          //this.emit('end')
        })
        .pipe(csso())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets'))
    
});

gulp.task('watch', () => {
  gulp.watch('src/index.jade', ['jade'])
  gulp.watch(webpackSrc, ['webpack'])
  gulp.watch(['src/sass/*'], ['compass'])
  //gulp.watch('./gulpfile.js', )
})

gulp.task('build', [
  'jade', 'compass', 
  'webpack' 
])

gulp.task('default', [
  'build', 'server', 'watch'
])
