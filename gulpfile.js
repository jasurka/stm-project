
//const { gulp, src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-dart-sass');
const gulp = require('gulp');
function comp() {
    return gulp.src('assets/scss/*.scss')     // берём все SASS-файлы
        .pipe(sass())                    // компилируем SASS в CSS
        .pipe(gulp.dest('assets/css/')); // выгружаем результат
}

exports.comp = comp;

gulp.task('default', gulp.series(comp));