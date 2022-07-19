// Include gulp
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var wiredep     = require('wiredep').stream;
var compass     = require('gulp-compass');
var reload      = browserSync.reload;

// Gulp CSS
gulp.task('styles', () => {
    return gulp.src('./assets/sass/main.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './assets/css',
            sass: './assets/sass'
        }))
        .pipe(reload({stream: true}));
});

//
gulp.task('scripts', () => {
    return gulp.src('./assets/js/*.js')
        .pipe(reload({stream: true}));
});

// Gulp Serve
gulp.task('serve', ['styles', 'scripts'], () => {

    // browser sync
    browserSync({
        proxy: 'localhost',
        notify: false,
        open: true,
        injectChanges: true
    });

    // watch task
    gulp.watch([
        'assets/sass/**/*.scss',
        'assets/js/*.js',
        './**/*.php'
    ]).on('change', reload);

    gulp.watch('assets/sass/**/*.scss', ['styles']);
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('bower.json', ['wiredep']);
});


// bower components
gulp.task('wiredep', () => {
    gulp.src('./header.php')
        .pipe(gulp.dest('./'));

    gulp.src('./footer.php')
        .pipe(gulp.dest('./'));
});