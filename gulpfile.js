var gulp = require('gulp');
var critical = require('critical');

gulp.task('critical', function() {
  critical.generate({
    inline: true,
    src: 'index.html',
    css: './css/style.min.css',
    dest: './index-critical.html',
    width: 1920,
    height: 800,
    minify: true,
    extract: true,
  })
})
