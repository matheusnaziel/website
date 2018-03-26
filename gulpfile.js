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
	return gulp.src('./src/sass/pages/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/styles'))
		.pipe(connect.reload());
})

gulp.task('vendors', function() {
	return gulp.src('./src/sass/vendors/*.css')
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

gulp.task('iconfont', function() {
	return gulp.src('./src/iconfont/fonts/*.{eot,svg,ttf,woff}')
	.pipe(gulp.dest('./dist/iconfont/'));
});

gulp.task('watch', function() {
	gulp.watch(['./src/*.html'], ['html']);
	gulp.watch(['./src/sass/**/*.scss'], ['sass']);
	gulp.watch(['./src/js/index.js'], ['js']);
});

gulp.task('default', ['html','js', 'sass', 'vendors', 'images', 'iconfont', 'connect', 'watch']);