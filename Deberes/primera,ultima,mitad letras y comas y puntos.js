
console.log('------------INSTITUTO TECNOLOGICO QUITO---------------------------------------- ' );
function contar(texto, caracter) {
    return [...texto].filter(l => l === caracter).length;

}
console.log('--------------------------Nombre: Darwin Muñoz-------------------------- ' );
var resul = contar("Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle.", ",");
console.log('RESULTADO DE TODAS LAS COMAS DEL TEXTO: ' + resul);
console.log('---------------------------------------------------------------------- ' );
var resulLetras = contar("Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle.", ".");
console.log('RESULTADO DE TODAS LOS PUNTOS ENCONTRADOS DEL TEXTO: ' + resulLetras);
console.log('---------------------------------------------------------------------- ' );
var resulPrimerLetra = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle."
PrimerPal (resulPrimerLetra);
function PrimerPal (resulPrimerLetra){
    var palabra = resulPrimerLetra.split(" ")
    console.log(' PRIMERA PALABRA DEL TEXTO ENCONTRADO.: ' + palabra[0].toUpperCase());

}
console.log('---------------------------------------------------------------------- ' );

var resulUltimarLetra = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle."
finalPal (resulUltimarLetra)
function finalPal (resulUltimarLetra){
    
    var palabra = resulUltimarLetra.split(" ")
    var cont = palabra.length 
    console.log('ULTIMA PALABRA DEL TEXTO:' + palabra[cont-1].toUpperCase());

    
}
console.log('---------------------------------------------------------------------- ' );
var resulMitadLetra = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido que combina detección de fase y contraste de una función de Superresolución que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles con más detalle."
mitad (resulUltimarLetra);
function mitad (resulMitadLetra){
    
    var palabra = resulMitadLetra.split(" ")
    var cont = palabra.length
    val = cont/2 
    if(cont % 2 == 0){

        med =  palabra[val-1]+ " " +palabra[val]
    }else {

        valor = Math.trunc(val)  
        med = palabra [valor] 

    } 
    console.log('LA MITAD DE LA PALABRA DEL TEXTO: ' + med.toUpperCase())

}
console.log('-----------------------GRACIAS POR OCUPAR EL CODIGO------------------- ' );
