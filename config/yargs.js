const opts = {
    base: {
        demand: true,
        alias: 't',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

let argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opts)
    .command('crear', 'Genera un archivo von la tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}