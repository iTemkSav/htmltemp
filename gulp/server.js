import gulp from 'gulp';
import browserSync from 'browser-sync';


gulp.task('server', ()=>{
	browserSync.init({
		server: {
			baseDir: "www/"  
		},
		files: ['www/*.html', 'www/css/*.css', 'www/img/*.*', 'www/js/*.js']
	});
});