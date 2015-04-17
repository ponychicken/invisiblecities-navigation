var gulp = require('gulp');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('gulp-watchify');
var autoprefixer = require('gulp-autoprefixer');
var reactify = require('reactify');
var server = require('gulp-server-livereload');
var rename = require("gulp-rename");
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var deploy = require('gulp-gh-pages');
var uglify = require('gulp-uglify');

var target = 'index.js'

// GH pages
gulp.task('ghpages', ['less', 'copy', 'setproduction', 'browserify'], function () {
  return gulp.src('./dist/**/*')
    .pipe(deploy());
});

gulp.task('deploy', ['less', 'copy', 'setproduction', 'browserify', 'ghpages']);

// Hack to enable configurable watchify watching
var watching = false;
gulp.task('enable-watch-mode', function () {
  watching = true;
});

// Browserify and copy js files
gulp.task('browserify', watchify(function (watchify) {
  return gulp.src('./src/index.jsx')
    .pipe(plumber())
    .pipe(watchify({
      debug: false,
      watch: watching,
      setup: function (bundle) {
        bundle.transform(babelify);
      }
    }))
    .pipe(rename(target))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
}));

gulp.task('setproduction', function() {
  process.env.NODE_ENV = 'production';
  target = 'index.prod.js'
});

gulp.task('compress', ['browserify'], function() {
  gulp.src('dist/index.prod.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('watchify', ['enable-watch-mode', 'browserify']);

gulp.task('less', function () {
  gulp.src('./css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 Chrome versions', 'iOS 8']
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8000,
    livereload: true
  });
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      host: 'pony.local',
      livereload: true,
      directoryListing: true
    }));
});


gulp.task('copy', function() {
  gulp.src(['index.html', 'index.prod.html', 'assets/*', 'content/*'])
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('css/*.less', ['less']);
  gulp.watch('index.html', ['copy']);
  gulp.watch('index.prod.html', ['copy']);
});

// gulp.task('develop', function () {
//   livereload.listen();
//   nodemon({
//     script: 'bin/www',
//     ext: 'js jade json',
//     ignore: ['public/*', 'src/client/*']
//   }).on('restart', function () {
//     setTimeout(function () {
//       //livereload.changed();
//     }, 1500);
//   });
// });

gulp.task('prod', ['setproduction', 'default']);

gulp.task('default', [
  'less',
  'copy',
  // 'develop',
  'watchify',
  'connect',
  'watch'
]);
