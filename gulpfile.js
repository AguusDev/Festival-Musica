// watch == Es para decirle que archivos van a ir cambiando sin necesidad de ejecutarlos una y otra vez en la terminal
const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

// utilidades CSS
 const autoprefixer = require('autoprefixer');
 const postcss = require('gulp-postcss');
 const cssnano = require('cssnano');
 const sourcemaps = require('gulp-sourcemaps');

// Funcion que compila SASS
// Los .pipes son funciones que se ejecutan secuencialmente como en fila

function css(){
    return src('src/scss/app.scss')
    .pipe(sourcemaps.init() )
        .pipe( sass() )  
        .pipe(postcss([autoprefixer(), cssnano()]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('./build/css')) 
}

function javascript(){
    return src('src/js/**/*.js')
        .pipe( concat('bundle.js'))
        .pipe( dest('./build/js'))
}


function watchArchivos(){ // A watch le vamos a pasar dos parametros 1) Le vamos a decir que escuche los cambios de el archivo en el primer parametro (pasar la ruta del archivo)
    watch('src/scss/**/*.scss' , css)   // 2) Y en el segundo parametro le decimos, una vez que ese archivo cambie quiero que ejecutes la funcion de css
    watch('src/js/**/*.js' , javascript)
}                                 // El asterisco lo agregamos para decirle que a todos los archivos que tengas la extension scss lo escuche y realice los cambios 
                                   // cuando realizamos el cambio del nombre al asterisco hay que parar la funcion watchArchivos(ctrl + C) y volverla a ejecutar (gulp watchArchivos)
                                   // y si tenemos carpetas en la carpeta scss el asterisco no las va a leer por que solo va a interpretar a el primer nivel de la carpeta scss
                                   // para que lea las carpetas en la carpeta scss tenemos que poner de la siguiente manera ==  watch('src/scss/**/*.scss' , css)



exports.css = css;
exports.javascript = javascript;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javascript, watchArchivos)