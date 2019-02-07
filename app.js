// requireds
const argv = require('./config/yargs').argv
const { crearArchivo, lilstTable } = require('./multiplicar/multiplicacion')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        lilstTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando No reconocido');
}

//Base para las tablas de Multiplicación


//process 
// console.log(process.argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1]


// Obtener el Resultado de la Multiplicación

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(err))