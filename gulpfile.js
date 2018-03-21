var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');


gulp.task('connect', function() {
	connect.server({
		root: './dist',
		livereload: true,
		port: 2222
	});
});

gulp.task('html', function() {
	return gulp.src('./src/index.html')
	.pipe(gulp.dest('./dist/'))
	.pipe(connect.reload());
});

gulp.task('sass', function() {
	return gulp.src('./src/sass/index.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/styles'))
		.pipe(connect.reload());
})

gulp.task('css', function() {
	return gulp.src('./src/css/*.css')
		.pipe(gulp.dest('./dist/styles'));
})

gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
	.pipe(gulp.dest('./dist/js'))
	.pipe(connect.reload());
});

gulp.task('images', function() {
	return gulp.src('./src/images/*.{png,jpg,jpeg}')
	.pipe(gulp.dest('./dist/images/'));
});

gulp.task('watch', function() {
	gulp.watch(['./src/*.html'], ['html']);
	gulp.watch(['./src/sass/*.scss'], ['sass']);
	gulp.watch(['./src/js/index.js'], ['js']);
});

gulp.task('default', ['html','js', 'sass', 'css', 'images', 'connect', 'watch']);