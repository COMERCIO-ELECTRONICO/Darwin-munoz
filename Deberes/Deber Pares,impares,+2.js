//
/* arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
arreglo dos, filter los impares , sumar + 2 */


var json = {
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
        dos: [
            {valor: 1},
            {valor: 4},
            {valor: 2},
            {valor: 24},
            {valor: 100},
            {valor: 23},
            {valor: 45},
            {valor: 23}
        ]
    }
   
}

   
    //
    var arregloNumImpares =json.arreglos.dos
    .filter(
        (item) => {
            return (item.valor % 2)== 1; //el porcentaje sirve para dividir y sacar numeros enteros 
        }
        
    )
    console.log ('-----------------------------------------------------------------');
    
    console.log ('TODOS LO NUMEROS SUMADO + 2');
    console.log (arregloNumSu);
    var arregloNumSu = arregloNumImpares
    .map(
        (item) => {
            return (item.valor + 2);//llamamos a la variable Valor
        }
    )
    console.log ('-----------------------------------------------------------------');
    console.log ('TODOS LOS NUMEROS IMPARES ');
    console.log (arregloNumImpares);

    var arregloMultiplicadoUno = json.arreglos.uno
    .map(
        (item) => {
            return item * 2;
        }
    )
    console.log ('-----------------------------------------------------------------');
    console.log ('TODOS LOS NUMEROS MULTIPLICADOS POR 2 ');
    console.log (arregloMultiplicadoUno);
    var arregloPares = json.arreglos.uno
    .filter(
        (item) => {
            return (item % 2)== 0; 
        }
    )
    console.log ('-----------------------------------------------------------------');
    console.log ('TODOS LOS NUMEROS PARES');
    console.log (arregloPares);
    

     
  
    
   
