const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const browserSync = require("browser-sync");

// Imagemin and plugins
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");

// Variables
const origin = "src";
const destination = "dist";

sass.compiler = require("node-sass");

const ftpConfig = require("./config.json");

console.log(ftpConfig);

async function clean(cb) {
  await del(destination);
  cb();
}

function html(cb) {
  gulp.src(`${origin}/**/*.html`).pipe(gulp.dest(`${destination}`));

  cb();
}

function css(cb) {
  gulp
    .src(`${origin}/css/**/*.css`)
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(gulp.dest(`${destination}/css`));

  cb();
}

function js(cb) {
  gulp.src(`${origin}/js/**/*.js`).pipe(gulp.dest(`${destination}/js`));

  cb();
}

async function optImg(cb) {
  // All images
  const images = {
    optimized: {
      minify: "assets/img/optimized/minify",
      resized: "assets/img/optimized/resized",
      webm: "assets/img/optimized/webm",
      webp: "assets/img/optimized/webp",
      root: "assets/img/optimized/"
    }
  };

  //  console.log(`${origin}/${images.optimized.webp}/*.{jpg,webp,png}`);

  // await gulp.src([`${origin}/assets/img/optimized/**/*.webp`, `${origin}/assets/img/optimized/**/*.svg`], {nordir: true})
  await gulp
    .src(`${origin}/${images.optimized.webp}/*.{jpg,png}`, { nordir: true })
    .pipe(
      imagemin([
        webp({
          quality: 40,
          lossles: true,
          resize: {
            width: 600,
            height: 800
          }
        })
      ])
    )
    .pipe(gulp.dest(`${destination}/assets/img/optimized/webp`));

  cb();
}

function webm(cb) {
  gulp
    .src(`${origin}/assets/img/optimized/**/*.webm`)
    .pipe(gulp.dest(`${destination}/assets/img/optimized`));

  cb();
}

function svg(cb) {
  gulp
    .src(`${origin}/assets/img/optimized/**/*.svg`)
    .pipe(gulp.dest(`${destination}/assets/img/optimized`));

  cb();
}

function watcher(cb) {
  gulp
    .watch(`${origin}/**/*.html`)
    .on("change", gulp.series(html, browserSync.reload));
  gulp
    .watch(`${origin}/**/*.css`)
    .on("change", gulp.series(css, browserSync.reload));
  gulp
    .watch(`${origin}/**/*.js`)
    .on("change", gulp.series(js, browserSync.reload));

  cb();
}

function server(cb) {
  browserSync.init({
    server: {
      notify: false,
      open: false,
      baseDir: destination
    }
  });

  cb();
}

exports.default = gulp.series(
  clean,
  gulp.parallel(html, css, js, optImg, webm, svg),
  server,
  watcher
);
exports.noserv = gulp.series(
  clean,
  gulp.parallel(html, css, js, optImg, webm, svg)
);
exports.clean = clean;
exports.webm = webm;

exports.hej = gulp.series(clean, gulp.parallel(html, css, js));
