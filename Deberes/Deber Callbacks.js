

import {Date, func} from "joi";

var arregloJsons = [
    { 
        nombre: 'darwin',
        edad: 22,
        fechaNacimiento: new Date (),
        telef: 0962302552
    }]

    var usuarioNuevo = {
        nombre: 'wilson',
        edad: 25,
        fechaNacimiento: new Date (),
        telef: 0988448272   
    }

    function crearUsuario(arreglo, usuarioACREAR, cb) {
        var usuarioEncontrar = arreglo
        .fins(
            (item) =>  {
            return item.nombre === usuarioACREAR.nombre
        })
        console.log(usuarioEncontrar);
    }

    if(usuarioEncontrado !== underfined) {
        arreglo.push(usuarioACREAR)
        cb( {
            mensaje: 'Usuario creado',
            usuario: usuarioACREAR,
            arreglo
        })
         } else { 

            cb({
            
                mensaje: 'Usuario existente',
                usuario: usuarioACREAR,
                arreglo
            })
        }
    crearUsuario(arregloJsons, usuarioNuevo, (respuestaCallback) => {
        console.log('mensaje: ${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario}')
        console.log(respuestaCallback.arreglo)
    })

    function eliminarUsuario(arreglo, nombreUsuario, ch){
        var indiceUsuario = arreglo
        .findIndex( 
            (item) => {
                return item.nombre === nombreUsuario
            })
            console.log(indiceUsuario);
         if(indiceUsuario !== -1) {
             arreglo.splice(indiceUsuario,1)
             cd ({
                 mensaje: 'eliminado'
             })
         } else {
            cd ({
                mensaje: 'eliminado no'
            })
         }   
    }

    eliminarUsuario(arregloJsons, 'darwin', (respuestaCallback) => { 
    console.log(resultadoCallback)
    console.log(arregloJsons)
})
console.log(arregloJsons)