
// devDependencies
var gulp            = require("gulp"),
       gulp_sass  = require("gulp-sass"),
       gulp_plumber  = require("gulp-plumber"),
       gulp_sourcemaps  = require("gulp-sourcemaps"),
       gulp_notify = require("gulp-notify");


// config
var config = {
    dist:"../dist/",
    src:"../src/"
}

gulp.task("default",["fonts","sass"], function() {
return gulp.src(config.src+'index.html')
    .pipe(gulp.dest(config.dist));
})

gulp.task("fonts", function() {
    return gulp.src(config.src+'fonts/**/**')
    .pipe(gulp.dest(config.dist+"fonts"))
})

gulp.task('sass', function() {
return gulp.src(config.src+'styles/main.scss')
    .pipe(gulp_plumber({
        errorHandler: gulp_notify.onError('SASS Error: <%= error.message %>')
    }))
    .pipe(gulp_sourcemaps.init())
    .pipe(gulp_sass().on('error', gulp_sass.logError))
    .pipe(gulp_sourcemaps.write())
    .pipe(gulp.dest('../dist/assets/css'))
    .pipe(gulp_notify('SASS compiled: <%= file.relative %>'));
});
