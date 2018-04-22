// Include Gulp
var gulp = require('gulp');

var src = 'bower_components/';
var dest = 'public/js';

// Include plugins
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

//Concat + Minify JS
gulp.task('js', function() {

var jsFiles = [
	'bower_components/jquery/dist/jquery.min.js',
	'bower_components//blueimp-file-upload/js/vendor/jquery.ui.widget.js',
	'bower_components/blueimp-file-upload/js/jquery.fileupload.js'
];

gulp.src(jsFiles)
    .pipe(plugins.filter('**/*.js'))
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/js'));

});
//Concat + Minify CSS
gulp.task('css', function() {

var cssFiles = ['src/css/*'];

gulp.src(plugins.mainBowerFiles().concat(cssFiles))
    .pipe(plugins.filter('*.css'))
    .pipe(plugins.concat('main.min.css'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dest + 'css'));

});

// Default Task
gulp.task('default', ['js','css']);
