
console.log('*********INSTITUTO TECNOLOGICO QUIERO*****************');
console.log('*********NOMBRE: DARWIN MUÑOZ***************');
console.log('********COMERCIO ELECTRONICO************');



var arreglo=[
  {nombre:'Darwin',edad:22,Nacimiento: new Date(1998/30/30), telef:"1234567890"},
  {nombre:'Wilson',edad:26,Nacimiento: new Date(1994/08/28), telef:"0987654321"},
  {nombre:'Madre: Patricia',edad:41,Nacimiento: new Date(1971/07/17), telef:"8375060537"},
]

console.log('****************LISTAR**************************');
function lisUsuario(arreglo, cb) {
  arreglo
      .forEach(
          usuario => {
              console.log(usuario);
          });
  cb({
      mensaje: 'LISTAS DE USUARIOS'
  })
}

lisUsuario(arreglo, (respuestaMensaje) => {
  console.log(respuestaMensaje);
})

console.log('*****************CREAR***********************');

function crearUsuario (arreglo,usuario,cb){
  if (arreglo == usuario){
      cb({
          mensaje: 'USUARIO YA CREADO',
          arreglo
      })
  }else{
      arreglo.push(usuario);
      cb({
          mensaje: 'EL USUARIO ESTA INGRESADO CORRECTAMENTE',
          arreglo
      })
  }
}

var usuario = {nombre:'Jordan',edad:24,Nacimiento: new Date(1996/06/17),telef:"0987667890"};

crearUsuario(arreglo,usuario,(respuestaMensaje) => {
  console.log(respuestaMensaje);
})
console.log('**********ELIMINAR****************');

function eliminar(arreglo,index,cb){
  var i = arreglo.indexOf( index );
  if ( i !== -1 ) {
      arreglo.splice( i, 0 );
      cb({
          mensaje: 'SE ELIMINO EL USUARIO EXITOSAMENTE',
          arreglo
      })
  }else{
      cb({
          mensaje: 'NO HAY O NO EXISTE',
          arreglo
      })
  }
  
}


eliminar(arreglo,0,(respuestaMensaje) => {
  console.log(respuestaMensaje);
})

console.log('*******************EDITAR******************************');

function UsuEditar(arreglo,nombre,index,cb){
  arreglo[index]=nombre;
  cb({
      mensaje: 'SE A CAMBIADO EL USUARIO',
      arreglo
  })
}


var nom2 = {nombre: 'Jordan',edad: 26,fecha: new Date(1998/06/20),telf: "0877667890"}

UsuEditar(arreglo, nom2, 0, (respuestaMensaje) => {
  console.log(respuestaMensaje);
})
console.log('*************GRACIAS POR OCUPAR NUESTRO SISTEMA DE CRUD****************************');
