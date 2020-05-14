//API
//Prograama Funcional

/*function programacionFuncional(numero1, () => { }, 1 ){

}*/

/*function primeraFuncion(){
    setTimeout(
        ()=>{
    console.log('primera')
},500
    )
}


function segundaFuncion(){
    console.log('2')
}
//primeraFuncion()
//segundaFuncion()

//*callback es una funcion
function saluda(nombre, callback) {
    console.log('saludo,', nombre)
    callback()
}

function funcionCallback(){
    console.log('ya salude')

}
saluda('darwin', () =>  {
    console.log('saludastes')
})

function saludar(nombre) {
    console.log('ejectuo saludo a' &{nombre}    )
    return nombre
}

function peticionUsuario(nombre, callback){
    callback(nombre)
}

peticionUsuario('darwin', saludar)
peticionUsuario('darwin', (saludar) =>{
    console.log(saludar);

})*/

/*var arreglo = []

var nombreNuevo = 'alexander'

function añadirNombre(arreglo, nombre, cb) {
    arreglo.push(nombre);
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}


añadirNombre(arreglo, 'darwin', 2, (mensaje) => {
    console.log(mensaje);

});¨/


//deber 
/*
usar un arreglo de json(nombre, edad,fecha Nacimineot, telef )
-callback crear un usuario (json) -> buscar en si ya existe debe imprimir que ya existe y si no crear
-callback editar un usuario (json)
-callback eliminar un usuario (json)
-callback listar usuario

null: si esta puesto un cero 
undefined=esta definido o no
//npm install nombrePaquete
//npm install nombrePaquete@1.23    
*/
 
//deber falta.
var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {

    arreglo
        .forEach(
            usuario => {
        
            console.log(usuario);
        });
    cb({
        mensaje: 'lista de usuario'
   })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log( respuestaMensaje);
})

