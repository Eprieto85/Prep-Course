// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}//1


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}//2


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}//3


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
var nar=[];
  for(var i=0;i<array.length;i++){
      nar[i]=array[i]+1;
  }
  return nar;
}//4


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
        array[array.length]=elemento;
          return array;
}//5


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
array.unshift(elemento);
  return array;
}//6


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
return palabras.join(" ");
}//7


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for(var i=0;i<array.length;i++){
      if(array[i]===elemento){
        return true;
      }
      
  }
  return false;
}//8


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
var num=0;
  for(var i=0;i<numeros.length;i++){
    num+=numeros[i];
  }
  return num;
}//9


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var int=0;
    for(var i=0;i<resultadosTest.length;i++){
      int+=resultadosTest[i];
      }
      var x = int/resultadosTest.length;
      return x;
}//10


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
//var max=numeros[0];
  //for(var i=0;i<numeros.length;i++){
    //if(numeros[i]>max){
      //max=numero[i];
    //}}return max;
  return Math.max(...numeros);
}//11


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mul=1;
    if(arguments.length<1) return 0;
      for(var i=0;i<arguments.length;i++){
        mul*=arguments[i];
}
  return mul;
}//12


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var May=0;
  for(var i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
        May+=1;
    }
  }
  return May;
}//13


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
    if(numeroDeDia===1||numeroDeDia===7){
      return "Es fin de semana"; 
    }
    return "Es dia Laboral"; 
} //14


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var str=n+"";
    if(str[0]==="9"){
      return true;
    }else{
return false;
    }
}//15


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var ar2=arreglo[0];
  for(var i=0;i<arreglo.length;i++){
    if(arreglo[i]!== ar2)
      return false;
  }
  return true;
} //16


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var ary=[];
    for(var i=0;i<array.length;i++){
      if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
        ary.push(array[i]);
      }
    }
    if(ary.length!==3){
      return "No se encontraron los meses pedidos";
    } return ary;
}//17


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arc=[];
    for(var i=0;i<array.length;i++){
      if(array[i]>100){
        arc.push(array[i]);
      }
    }  return arc;
}//18


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var iter=[];
    var isd=numero;
      var num=1;
    for(var i=1;i<=10;i++){
      isd+=2;
        if(isd===num) {break;}
          num+=1;
        iter.push(isd);
      }  
      if(num===isd) return "Se interrumpió la ejecución";
        return iter;
}//19


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var ary=[];
    var adn=numero;
      for(var i=0;i<10;i++){
        if(i===5) continue;
        else{
        adn+=2;
        ary.push(adn);
      }
    }
      return ary;
}//20


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
