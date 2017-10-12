import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-render';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import prettify from 'gulp-prettify';

gulp.task( 'rend', () => renderHTML() );

gulp.task( 'rend:changed', () => renderHTML(true) );

gulp.task( 'rend:watch', () => {
	gulp.watch(['src/templates/**/[^_]*.html'], ['rend:changed']);
	gulp.watch(['src/templates/**/_*.html'], ['rend']);
});


function renderHTML(isChange){
	return gulp.src('src/templates/**/[^_]*.html')
		.pipe(gulpif(isChange, changed('www/')))
		.pipe(nunjucks({
			path: ['src/templates']
		}))
		.pipe(prettify({
			indent_size: 2,
            wrap_attributes: 'auto', // 'force'
            preserve_newlines: false,
            // unformatted: [],
            end_with_newline: true
		}))
		.pipe(gulp.dest('www'));
}