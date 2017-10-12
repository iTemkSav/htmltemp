import gulp from 'gulp';
import sourcemap from 'gulp-sourcemaps';
import sass from 'gulp-sass';
// import autoprefix from 'gulp-autoprefixer';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import cleancss from 'gulp-clean-css';

import { config as cfg } from '../package.json';


gulp.task('style', () => {
	return gulp.src(cfg.src.sass + '/app.sass')
		.pipe(sourcemap.init())
		.pipe(sass()).on('error', sass.logError)
		.pipe(postcss([ autoprefixer() ]))
		.pipe(sourcemap.write())
		.pipe(rename({basename: "style"}))
		.pipe(gulp.dest(cfg.build.css));
});

gulp.task('style:watch', () => {
	gulp.watch([cfg.src.sass + '/**/*'], ['style']);
});