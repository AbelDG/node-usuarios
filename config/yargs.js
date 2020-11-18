//Definición de comandos

const comandoCrear = {
    nombre: {
        demand: true,
        alias: 'n',
        description: 'Nombre del usuario'
    },
    edad: {
        demand: true,
        alias: 'e',
        description: 'Edad del usuario'
    },
    sexo: {
        demand: true,
        alias: 's',
        description: 'Sexo del usuario'
    },
    dni: {
        demand: true,
        alias: 'd',
        description: 'DNI del usuario'
    },
    peso: {
        demand: false,
        alias: 'p',
        description: 'Peso del usuario'
    },
    altura: {
        demand: false,
        alias: 'a',
        description: 'Altura del usuario'
    }
}

const comandoModificar = {
    nombre: {
        demand: true,
        alias: 'n',
        description: 'Nombre del usuario'
    },
    edad: {
        demand: false,
        alias: 'e',
        description: 'Edad del usuario'
    },
    peso: {
        demand: false,
        alias: 'p',
        description: 'Peso del usuario'
    },
    altura: {
        demand: false,
        alias: 'a',
        description: 'Altura del usuario'
    }
}

const comandoListar = {
    nombre: {
        demand: false,
        alias: 'n',
        description: 'Nombre del usuario'
    },
    edad: {
        demand: false,
        alias: 'e',
        description: 'Edad del usuario'
    },
    sexo: {
        demand: false,
        alias: 's',
        description: 'Sexo del usuario'
    },
    dni: {
        demand: false,
        alias: 'd',
        description: 'DNI del usuario'
    },
    peso: {
        demand: false,
        alias: 'p',
        description: 'Peso del usuario'
    },
    altura: {
        demand: false,
        alias: 'a',
        description: 'Altura del usuario'
    }
}


const comandoBorrar = {
    nombre: {
        demand: true,
        alias: 'n',
        description: 'Nombre del usuario'
    }
}



const _argv = require('yargs')
    .command('crear', 'Crear un nuevo usuario', comandoCrear)
    .command('modificar', 'Modificar un usuario existente', comandoModificar)
    .command('listar', 'Listar los usuarios registrados', comandoListar)
    .command('borrar', 'Borrar un usuario existente', comandoBorrar)
    .help()
    .argv;






module.exports = {
    _argv
}