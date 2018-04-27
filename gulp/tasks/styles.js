var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	hexrgba = require('postcss-hexrgba');


gulp.task('styles', function() {
	return gulp.src('./site/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, hexrgba, autoprefixer]))
		.pipe(gulp.dest('./site/temp/styles'));
});