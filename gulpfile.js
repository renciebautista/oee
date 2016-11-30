var gulp = require("gulp");

var cssDest = './public/stylesheets';

gulp.task('copycss', function(){
	gulp.src(['./node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest(cssDest))
});