//table del 5 en consola

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear(); //limpia pantalla
// console.log(argv);
// console.log('base: yargs ',argv.base);

// const [,,arg3 = 'base=1'] = process.argv //si es nulo le pongo uno por default
// const [,base=1] =arg3.split('='); //si el usuairo solo escribe => --base por default set =1
//console.log(base);

const base=argv.base;
crearArchivo(base,argv.l,argv.h)
      .then(nombreArchivo => { console.log(nombreArchivo,'creado.')})
      .catch(err => { console.log("**"+err)});

