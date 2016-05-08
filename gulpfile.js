var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  watch = require('gulp-watch'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  coffee = require('gulp-coffee'),
  jade = require('gulp-jade'),
  csso = require('gulp-csso'),
  path = require('path'),
  uncss = require('gulp-uncss'),
  sass = require('gulp-sass'),
  streamify = require('gulp-streamify'),
  browserify = require('browserify'),
  autoprefixer = require('gulp-autoprefixer'),
  gulpif = require('gulp-if'),
  source = require('vinyl-source-stream'),
  browserSync = require('browser-sync').create()

jadeSrc = [
  'src/templates/*.jade',
  'src/mixins.jade',
  'src/index.jade'
]

bowerSrc = [
  'src/assets.json',
  'src/components/*'
]

sassSrc = [
  'src/sass/style.sass',
  'src/sass/print.sass',
  'src/sass/common.sass'
]

isProduction = ( process.env.NODE_ENV =="production" || false )

coffeeSrc = [
  'src/scripts/*.coffee'
]

gulp.task('serve', ['jade', 'coffee', 'sass', 'browserify'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('./assets/*').on('change', browserSync.reload)
})

gulp.task('coffee', () => {
  gulp.src(coffeeSrc)
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    //.pipe(sourcemaps.init)
      .pipe(coffee({
        bare: !isProduction
      }))
      .pipe(gulpif(isProduction, uglify()))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.stream())
})

gulp.task('jade', () => {
  gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream())
})

gulp.task('sass', () => {
    gulp.src(sassSrc)
      .pipe(plumber())
      .pipe(sass({
        loadPath: 'src/components'
      }))
/*      .pipe(uncss({
           html: ['index.html']
      }))*/
      .pipe(sourcemaps.init())
        .pipe(autoprefixer({
          browsers: ['last 2 version'],
          cascade: false
        }))
        .pipe(gulpif(isProduction, csso()))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets'))
      .pipe(browserSync.stream())
})

gulp.task('browserify', () => {
  browserify('src/entry.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify({
      mangle: true,
      compress: {
        dead_code: true,
        unsafe: true
      }
    })))
    .pipe(gulp.dest('assets'))
})

gulp.task('watch', () => {
  gulp.watch(jadeSrc, ['jade'])
  gulp.watch(['src/scripts/*'], ['coffee'])
  gulp.watch(['src/sass/*'], ['sass'])
  gulp.watch('src/entry.js', ['browserify'])
})

gulp.task('build', [
  'browserify',
  'coffee',
  'sass',
  'jade',
])

gulp.task('default', [
  'build',
  'serve',
  'watch'
])
