// Include Gulp
var gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

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
    'bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.min.js',
    'bower_components/blueimp-file-upload/js/cors/jquery.postmessage-transport.js',
    'bower_components/blueimp-file-upload/js/cors/jquery.xdr-transport.js',    
    'bower_components/blueimp-file-upload/js/jquery.fileupload.js',         
    'bower_components/blueimp-file-upload/js/jquery.fileupload-process.js',
    'bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js',   
    'bower_components/blueimp-file-upload/js/jquery.iframe-transport.js',   
    'public/js/uploader.js'
];

gulp.src(jsFiles)
    .pipe(plugins.filter('**/*.js'))
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('public/js'));

});
//Concat + Minify CSS

  gulp.task('css', () => {
    return gulp.src('public/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('public/css/dist'));
  });

// Default Task
gulp.task('default', ['js','css']);
