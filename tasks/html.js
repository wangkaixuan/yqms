var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    rev = require('gulp-rev-append'),
    revCollector = require('gulp-rev-collector');
gulp.task('comold',function(){
    return gulp.src(['generating/rev/**/*.json','../Home/Tpl/comold/**/*.html'])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(rev())
        .pipe(gulp.dest('../Home/Tpl/generating/comold/'));
});
gulp.task('special',function(){
    return gulp.src(['generating/rev/**/*.json','../Home/Tpl/special/**/*.html'])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(rev())
        .pipe(gulp.dest('../Home/Tpl/generating/special/'));
});
gulp.task('public',function(){
    return gulp.src(['generating/rev/**/*.json','../Home/Tpl/Public/**/*.html'])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(rev())
        .pipe(gulp.dest('../Home/Tpl/generating/Public/'))

});
gulp.task('htmlmin',function(){
    var options = {
        removeComments: true,//清除HTML注释
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        ignoreCustomFragments:[/<%[\s\S]*?%>/,/<if[\s\S]*?<\/if>/,/<php>[\s\S]*?<\/php>/,/<\{\$.*}>/,/<volist[\s\S]*?<\/volist>/,/<empty>[\s\S]*?<\/empty>/,/<notempty[\s\S]*?<\/notempty>/,/<empty[\s\S]*?<\/empty>/,/<include[\s\S]*?\/>/,/<foreach[\s\S]*?<\/foreach>/,/<for[\s\S]*?<\/for>/,/"<\{\$.*}>"/,/</],
        collapseWhitespace: true//压缩HTML
    };
    return gulp.src(['generating/rev/**/*.json','../Home/Tpl/comold/*/*.html'])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('../Home/Tpl/generating/test/'));
});
