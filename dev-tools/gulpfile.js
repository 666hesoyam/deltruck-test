// GET STARTED
// 1. Install Gulp4 in "dev-tools"
// Press in cmd: npm install --save-dev gulp
// 2. For started works press in cmd "gulp" anc Ctrl+C for Stopping
// ========================================================================

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function sass_css(done) {
	gulp.src('../HTML/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe( gulp.dest('../HTML/css/') )
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe (autoprefixer ({
			browsers:  'last 4 versions, > 1%',
			cascade: true
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('./'))
		.pipe( gulp.dest('../HTML/css/') );
	done();
}

function watchSass() {
	gulp.watch("../HTML/sass/*.scss", sass_css);
}

gulp.task('default', watchSass);

