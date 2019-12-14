'use strict';

const gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();



// папки для работы

const paths = {
  html: {
    src: 'src/*.html',
    dest: 'dist'
  },
  fonts: {
    src: 'src/fonts/*',
    dest: 'dist/fonts/'
  },
  styles: {
    src: 'src/sass/**/*.sass',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  img: {
    src: 'src/img/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
    dest: 'dist/img'
  }
};

//server browser-sync
function serve() {
  bs.init({
  server: {
    baseDir: paths.html.dest
  },
  ui: false
})
}

//html
function html() {
  return gulp.src(paths.html.src)
  .pipe(gulp.dest(paths.html.dest))
  .pipe(bs.reload({
    stream: true
  }));
}

//fonts
function fonts() {
  return gulp.src(paths.fonts.src)
  .pipe(gulp.dest(paths.fonts.dest));
}

//img
function img() {
  return gulp.src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest));
}

//sass -> css

function styles() {
  return gulp.src(paths.styles.src)
  .pipe(gp.sass().on('error', gp.sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(bs.reload({
      stream: true
    }));
}

function watch() {
  gulp.watch(paths.html.src, gulp.series(html));
  gulp.watch(paths.styles.src, gulp.series(styles));
  gulp.watch(paths.img.src, gulp.series(img));
}


exports.html = html;
exports.fonts = fonts;
exports.styles = styles;
exports.serve = serve;
exports.watch = watch;
exports.img = img;

gulp.task('default', gulp.series(
  gulp.parallel(html, styles, fonts, img),
  gulp.parallel(watch, serve)
));
