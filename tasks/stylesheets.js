var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    revCollector = require('gulp-rev-collector');
//all css
gulp.task('stylesheets',function(){
    gulp.src(['css/**/*.css','!css/qingpu/*.css','!css/agent/*.css','!css/special/*.css','!css/older/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('generating/css/'));
});
//root css
gulp.task('styleall',function(){
    gulp.src(['css/**/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('generating/css/'));
});
//comold css
gulp.task('stylecomold',function(){
    gulp.src(['css/comold/**/*.css','!css/comold/ztree/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('generating/css/comold'));
});
//css add suffix
gulp.task('revCss',function(){
    gulp.src(['css/**/*.css'])
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('generating/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('generating/rev/css'));
});
//css update images
gulp.task('revCssimg',function(){
    gulp.src(['generating/rev/**/*.json','css/**/*.css'])
        .pipe(revCollector({
            replaceReved:true
        }))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('generating/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('generating/rev/css'));
});
