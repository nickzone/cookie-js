// 载入外挂
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    cleanDest = require('gulp-clean-dest'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    copy = require('gulp-copy'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// 项目源代码路径
var path = {};
var src = path.src = './src/**/*.js';

// 项目构建目标路径
var dest = path.dest = './dist';

// 编译
gulp.task('default', function () {
    return gulp.src(src) // 读取源码
        .pipe(cleanDest(dest))
        .pipe(gulp.dest(dest)) // 写入目标
        .pipe(rename({ suffix: '.min' })) //重命名
        .pipe(uglify()) // 压缩
        .pipe(gulp.dest(dest)) // 写入目标
        .pipe(notify({ message: 'build task complete' })); //提示完成
});