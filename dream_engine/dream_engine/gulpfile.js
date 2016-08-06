/**
 *  Dream Engine GulFile
 *  @description This file serve for the merrely purpose of compile and concatenate Typescript files and shouldn't be edited other than by the original author
 *  @version 1.00
 *  @author Nio Kasgami
 */


var gulp = require('gulp');
var ts = require('gulp-typescript');


function TsConfig(file) {
    return ts({
        allowJs: true,
        module: "commonjs",
        noEmitOnError: false,
        noImplicitAny: true,
        removeComments: false,
        sourceMap: false,
        target: "es5",
        outFile: `Dream_${file}.js`,
        typescript: require('typescript') // use local installation of typescript (who are 2.00)
    });
}

gulp.task('dist', ['Core']);