var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested');

gulp.task('default', function() {
	console.log("The default task was run.")
});

gulp.task('html', function() {
	console.log("site index updated");
});

gulp.task('styles', function() {
	return gulp.src('./site/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./site/temp/styles'));
});

gulp.task('watch',function() {

	watch('./site/index.html', function() {
		gulp.start('html');
	});

	watch('./site/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});