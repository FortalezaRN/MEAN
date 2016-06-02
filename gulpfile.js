var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('app')
		.pipe(webserver({
			//port: 4000,
			livereload: true,
			open: true,
			directoryListerning: true
		}));

});