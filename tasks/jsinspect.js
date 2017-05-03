var gulp = require('gulp'),
    jsinspect = require('gulp-jsinspect');
gulp.task('jsinspect',function(){
    return gulp.src('js/base.js')
        .pipe(jsinspect({
            'threshold':   10,
            'identifiers': true,
            'suppress':    0
        }));
});