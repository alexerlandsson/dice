var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  sass: {
    src: './src/css/*.scss',
    dest: './docs/css',
    watch: './src/css/**/*.scss'
  },
  html: {
    src: './src/index.html',
    dest: './docs'
  },
  js: {
    src: './src/js/*.js',
    dest: './docs/js',
    watch: './src/js/**/*.js'
  },
  images: {
    src: './src/assets/images/**/*',
    dest: './docs/assets/images'
  },
  sounds: {
    src: './src/assets/sounds/**/*',
    dest: './docs/assets/sounds'
  },
};

// CSS
gulp.task('sass', function() {
  return gulp
    .src(paths.sass.src)
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.sass.dest));
});

// HTML
gulp.task('html', function() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
});

// JS
gulp.task('js', function() {
  return gulp
    .src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest));
});

// Images
gulp.task('images', function() {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
});

// Sounds
gulp.task('sounds', function() {
  return gulp
    .src(paths.sounds.src)
    .pipe(gulp.dest(paths.sounds.dest));
});

// Watch
gulp.task('watch', function() {
  gulp.watch(paths.sass.watch, gulp.series('sass'));
  gulp.watch(paths.html.src, gulp.series('html'));
  gulp.watch(paths.js.src, gulp.series('js'));
});

// Default
gulp.task('default', gulp.series('sass', 'html', 'js', 'images', 'sounds'));
