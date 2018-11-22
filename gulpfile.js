const gulp         = require('gulp'),
    browserSync    = require("browser-sync").create();

gulp.task("server", () => {
    browserSync.init({
        server:"./",
        port:80,
        open: "local",
        logLevel: "debug",
        logPrefix: "broserSync building"
    });
});

gulp.task('default', ['watch']);

