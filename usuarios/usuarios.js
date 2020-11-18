const fs = require('fs');
const color = require('colors/safe');

const rutaDB = '../db/data.json';

//Funciones para cargar y guardar en el db/data.json

function cargarDatos() {
    try {
        //console.log(`${color.green('Datos cargados correctamente')}`);
        return require(rutaDB);
    } catch (e) {
        console.log(`${color.red(`No se han podido cargar los datos desde ${rutaDB}`)}`, e);
        return [];
    }
}

function guardarDatos(usuarios){
    let datos = JSON.stringify(usuarios);
    let ruta = rutaDB.split('../')[1];
    fs.writeFile(ruta, datos, (err)=>{
        if(err) throw new Error(color.red(`No se han podido guardar los datos en la ruta ${rutaDB}`), err);
        //console.log(color.green(`Datos guardados correctamente`));
        return true;
    });
}

//Funciones de la aplicación

let usuarios = [];

function crearUsuario(nombre, edad, sexo, dni, peso = 'Sin especificar', altura = 'Sin especificar'){
    //Cargamos los datos del data.json
    usuarios = cargarDatos();
    //Verificamos si el usuario existe en la base de datos, de ser así, no se crea el nuevo usuario
    if(usuarios.some(usuario => usuario.nombre == nombre)){
        console.log(`El usuario ${color.yellow(nombre)} ya existe en la base de datos`);
        return false;
    }
    //Creación del modelo de nuevo usuario
    let nuevoUsuario = {
        nombre,
        edad,
        sexo,
        dni,
        peso,
        altura
    }
    //Añadimos el nuevo usuario al array y lo guardamos en data.json
    usuarios.push(nuevoUsuario);
    guardarDatos(usuarios);

    console.log(`El usuario ${color.yellow(nombre)} ha sido creado correctamente`);
    return true;
}


function listarUsuarios(){
    usuarios = cargarDatos();

    console.log(color.yellow('--------------| USUARIOS |--------------\n'));
    for(let usuario of usuarios){
        if(usuario.peso == 'Sin especificar' && usuario.altura != 'Sin especificar' ){
            console.log(`${color.yellow('Nombre:')} ${color.green(usuario.nombre)}\n${color.yellow('Edad:')} ${color.green(usuario.edad)}\n${color.yellow('Sexo:')} ${color.green(usuario.sexo)}\n${color.yellow('DNI:')} ${color.green(usuario.dni)}\n${color.yellow('Peso:')} ${color.green(usuario.peso)}\n${color.yellow('Altura:')} ${color.green(usuario.altura)}cm\n`);
        }else if(usuario.altura == 'Sin especificar' && usuario.peso != 'Sin especificar'){
            console.log(`${color.yellow('Nombre:')} ${color.green(usuario.nombre)}\n${color.yellow('Edad:')} ${color.green(usuario.edad)}\n${color.yellow('Sexo:')} ${color.green(usuario.sexo)}\n${color.yellow('DNI:')} ${color.green(usuario.dni)}\n${color.yellow('Peso:')} ${color.green(usuario.peso)}Kg\n${color.yellow('Altura:')} ${color.green(usuario.altura)}\n`);
        }else if(usuario.peso == 'Sin especificar' && usuario.altura == 'Sin especificar'){
            console.log(`${color.yellow('Nombre:')} ${color.green(usuario.nombre)}\n${color.yellow('Edad:')} ${color.green(usuario.edad)}\n${color.yellow('Sexo:')} ${color.green(usuario.sexo)}\n${color.yellow('DNI:')} ${color.green(usuario.dni)}\n${color.yellow('Peso:')} ${color.green(usuario.peso)}\n${color.yellow('Altura:')} ${color.green(usuario.altura)}\n`);
        } else{
            console.log(`${color.yellow('Nombre:')} ${color.green(usuario.nombre)}\n${color.yellow('Edad:')} ${color.green(usuario.edad)}\n${color.yellow('Sexo:')} ${color.green(usuario.sexo)}\n${color.yellow('DNI:')} ${color.green(usuario.dni)}\n${color.yellow('Peso:')} ${color.green(usuario.peso)}Kg\n${color.yellow('Altura:')} ${color.green(usuario.altura)}cm\n`);
        }
    }
    console.log(color.yellow('----------------------------------------'));
}

function modificarUsuario(nombre, edad = 'Sin especificar', peso = 'Sin especificar', altura = 'Sin especificar'){
    usuarios = cargarDatos();
    
    let indiceUsuario = usuarios.findIndex(usuario => usuario.nombre == nombre);
    
    if(indiceUsuario >= 0){
        if(edad != 'Sin especificar') usuarios[indiceUsuario].edad = edad;
        if(peso != 'Sin especificar') usuarios[indiceUsuario].peso = peso;
        if(altura != 'Sin especificar') usuarios[indiceUsuario].altura = altura;
        console.log(`${color.green(`Usuario ${nombre} modificado con éxito`)}`);
    }else{
        console.log(color.red(`El usuario ${nombre} no existe`));
        return false;
    }

    guardarDatos(usuarios);
    return true;
}

function borrarUsuario(nombre){
    usuarios = cargarDatos();

    let existeUsuario = usuarios.some(usuario => usuario.nombre == nombre);

    if(existeUsuario){
        let nuevosUsuarios = usuarios.filter(usuario => usuario.nombre != nombre);
        guardarDatos(nuevosUsuarios);
        console.log(color.green(`El usuario ${nombre} ha sido borrado correctamente`));
        return true;
    }else{
        console.log(color.red(`El usuario ${nombre} no existe en la base de datos`));
        return false;
    }
    
    

}


module.exports = {
    crearUsuario,
    listarUsuarios,
    modificarUsuario,
    borrarUsuario
}