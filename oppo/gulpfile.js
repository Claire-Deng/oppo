//引入模块
var
gulp = require('gulp'),
less = require('gulp-less');

//编译less任务
gulp.task('testless',function(){
	gulp.src('less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'));
});

//实时监听任务
gulp.task('watch',function(){
	gulp.watch('less/**/*.less',['testless'])
});

//创建默认任务
gulp.task('default',['testless','watch']);

