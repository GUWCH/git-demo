'use strict';
/**
*1、LESS编译、压缩、合并
*2、JS合并、压缩、混淆
*3、img的复制
*4、html压缩
*/

//先载入gulp的包,因为这个包提供了一些api
var gulp = require('gulp');
var less = require("gulp-less");
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

gulp.task('style',function(){
	//这里是在执行style任务时自动执行
	//!开头即忽视_格式明明的less文件
	gulp.src(['src/styles/*.less','!src/styles/_*.less'])
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'))
	.pipe(browserSync.reload({
		stream:true
	}))//执行后刷新 
})
//js合并、压缩、混淆
gulp.task('script',function(){
	gulp.src('src/scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.reload({
		stream:true
	}))

})

//图片复制
gulp.task('image',function(){
	gulp.src('src/images/*.*')
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload({
		stream:true
	}))
})

//html压缩
gulp.task('html',function(){
	gulp.src('src/*.html')
	//collapse:true去掉空白字符   removeComments:true去除注释
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
		stream:true
	}))
})

gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:['dist']//设置根目录路径，否则直接server；true即可
		},
	},function(err,bs){
		console.log(bs.options.getIn(["urls","local"]));
	})
	gulp.watch('src/styles/*.less',['style']);
	gulp.watch('src/scripts/*.js',['script']);
	gulp.watch('src/images/*.*',['image']);
	gulp.watch('src/*.html',['html']);
})