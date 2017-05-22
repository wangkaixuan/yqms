var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    clean = require('gulp-clean');

gulp.task('default',['prod'],function(){
  console.log('\n\n\ninput command with params, for example: \n\ngulp build\n\n\n');
});
gulp.task('cssorjs',['stylesheets','jsmin'],function(){
  console.log('\n\n\ninput command with params, for example: \n\ngulp build\n\n\n');
});
//reduce
gulp.task('rev', ['revimg','revJsm','imagesmin'],function(cb){
    setTimeout(function(){
        console.log('\n\n\ncarry out: \n\nrevCssimg\n\n\n');
        gulpSequence('revCssimg')(cb);
    },3000);
  console.log('\n\n\ninput command with params, for example: \n\nrev build\n\n\n');
});
//clean
gulp.task('clean',function(){
    console.log('\n\n\ninput command with params, for example: \n\nclean build\n\n\n');
  return gulp.src(['generating/js','generating/css','generating/rev','generating/images/comold/sprite'],{read:false}).pipe(clean());
});
//html
gulp.task('html',['comold','public','special'],function(){
    console.log('\n\n\ninput command with params, for example: \n\nhtml build\n\n\n');
});
//prod
gulp.task('prod',function(cb){
    gulpSequence('clean','rev')(cb);
});