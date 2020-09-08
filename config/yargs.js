const argv = require('yargs')
             .command('crear', 'Crear un elemnto por hacer', {
                 descripcion: {
                     demand: true,
                     alias: 'd',
                     desc: 'Descripcion de una tarea por hacer '
                 }
             })
             .command('actualizado', 'Actualizar  un elemnto por hacer', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de una tarea por hacer '
                },
                completado: {
                    demand: true,
                    alias: 'c',
                    desc: 'Marca como completado '
                },
            })
            .help()
            .argv;

module.exports = {
    argv
}