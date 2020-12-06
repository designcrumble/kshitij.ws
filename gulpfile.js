var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');


// Starts a BrowerSync instance
gulp.task('sass', gulp.series( function (done) {  
    gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
        done();

}));

// Starts a BrowerSync instance
gulp.task('browser-sync', gulp.series( function(done){
	port: 2000,  
    browserSync.init(["css/*.css", "js/*.js", "index.html"], {
        server: {
            baseDir: "./"
        }
    });
    done();
}));

// Starts a BrowerSync instance
gulp.task('default', gulp.series( ['sass', 'browser-sync'], function(done){
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    done();
}));

