const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marco como completado o pendiente una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza algo', { descripcion, completado })
    .command('borrar', 'Borrar algo', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}