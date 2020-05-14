
//funcion cualquiera
function strngRev2(str){
    //metodo split con el parametro de entrada de esa funcion
    var myMessage = str.split(''); //usamos como separador una cadena de texto vacia.
   //reverse da la vuelta a los caracteres.
    var reversedMyMenssage = myMessage.reverse();
    //metodo join para volver a unir a funcionar los elementos.
    var finalReverse = reversedMyMenssage.join('');
    //retornando un string con el orden cambiando.
    return finalReverse;
}
console.log(strngRev2("COMERCIO ELECTRONICO"))