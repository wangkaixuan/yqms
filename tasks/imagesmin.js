var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    rev = require('gulp-rev'),
    notify = require('gulp-notify');

gulp.task('imagesmin',function(){
    gulp.src(['images/**/*.{png,jpg,gif,ico}','!images/older/**/*.{png,jpg,gif,ico}','!images/shaanxi/**/*.{png,jpg,gif,ico}','!images/qd/**/*.{png,jpg,gif,ico}','!images/qingpu/**/*.{png,jpg,gif,ico}','!images/agent/**/*.{png,jpg,gif,ico}','!images/briefings/**/*.{png,jpg,gif,ico}','!images/special/**/*.{png,jpg,gif,ico}','!images/newhelp/**/*.{png,jpg,gif,ico}','!images/help/**/*.{png,jpg,gif,ico}'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('generating/images'))
});

//comold
gulp.task('imagesmincomold',function(){
    gulp.src('images/comold/*/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive:true,
            svgoPlugins:[{removeViewBox:false}],
            use:[pngquant()]
        }))
        .pipe(gulp.dest('generating/images/comold'))
});

gulp.task('imagesmincache',function(){
    gulp.src('images/**/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('generating/images'))
});
//image 起别名
gulp.task('revimg',function(){
    gulp.src(['images/comold/sprite/*.{png,jpg,gif,ico}'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(rev())
        .pipe(gulp.dest('generating/images/comold/sprite/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('generating/rev/images'));
});

