var gulp = require('gulp'),
    rev = require('gulp-rev') ,
    uglify = require('gulp-uglify');
//all js
gulp.task('jsmin',function(){
    gulp.src(['js/**/*.js','!js/comold/ztree/*.js','!js/comold/editor/*.js','!js/echarts/**/*.js','!js/lhgcalendar/**/*.js','!js/MyDatePicker/lang/*.js','!js/MyDatePicker/skin/*.js','!js/pdf/**/*.js','!js/pdf/**/*.js','!js/links/**/*.js','js/MyDatePicker/setDateCensus.js','js/MyDatePicker/setDateFun.js','js/MyDatePicker/setDateWaring.js','js/MyDatePicker/setDateZongshu.js','js/MyDatePicker/WdatePicker.js'])
        .pipe(uglify())
        .pipe(gulp.dest('generating/js/'));
});
//root directory js
gulp.task('jsminroot',function(){
    gulp.src(['js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('generating/js/'));
});
//js comold
gulp.task('jsmincomold',function(){
    gulp.src(['js/comold/**/*.js','!js/comold/ztree/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('generating/js/comold'));
});

gulp.task('revJsm',function(){
    gulp.src(['js/**/*.js'])
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('generating/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('generating/rev/js'));
});