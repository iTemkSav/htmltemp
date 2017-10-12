import gulp from 'gulp';
import runSequence  from 'run-sequence';

gulp.task('default', () => {
	runSequence(
		'style',
		'rend',
		'server',

		'rend:watch',
		'style:watch'
	);
});