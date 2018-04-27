var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	mixins = require('postcss-mixins'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');


gulp.task('styles', function() {
	return gulp.src('./site/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./site/temp/styles'));
});