const argv = require('./config/yargs')._argv;
const usuarios = require('./usuarios/usuarios');
let comando = argv._[0];


switch (comando) {
    case 'crear':
        usuarios.crearUsuario(argv.nombre, argv.edad, argv.sexo, argv.dni, argv.peso, argv.altura);
        break;
    case 'modificar':
        usuarios.modificarUsuario(argv.nombre, argv.edad, argv.peso, argv.altura);
        break;
    case 'listar':
        usuarios.listarUsuarios();
        break;
    case 'borrar':
        usuarios.borrarUsuario(argv.nombre);
        break;
    default:
        console.log('Comando no reconocido');
}