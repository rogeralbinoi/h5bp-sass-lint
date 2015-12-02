var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint');


gulp.task('sass', function () {
  gulp.src('./_sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scsslint', function () {
  gulp.src('./_sass/**/*.scss')
	.pipe(scsslint())
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./_sass/**/*.scss', ['sass']);
});

gulp.task('sass:watch:lint', function () {
  gulp.watch(['./_sass/**/*.scss', './_sass/**/_*.scss'], ['sass','scsslint']);
});