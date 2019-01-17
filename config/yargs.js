const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca Como Completado de una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear Un Elemento por Hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar Tareas hechas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}