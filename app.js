const argv = require('./config/yargs').argv
const todo = require('./to-do/to-do');
//const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch(comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = todo.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'Listar':
        console.log('Crear por hacer');
    break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
    break;
    default:
        console.log('Comando no es reonocido.');
    break;
}