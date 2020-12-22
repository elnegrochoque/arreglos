/*
3- Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números aleatorios
entre 1 y 6 para cada uno de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array 
el número de apariciones de dicha suma,
repitiendo 50 veces esta operación.
*/
let dado1;
let dado2;
let arregloSuma=[];
let suma;
let contador=0;
dado2=Math.floor(Math.random() * (6)) + 1;
dado1=Math.floor(Math.random() * (6)) + 1;
suma=dado1+dado2
for (let index = 0; index <50; index++) {
    dado2=Math.floor(Math.random() * (6)) + 1;
    dado1=Math.floor(Math.random() * (6)) + 1;
    if ((dado1+dado2)==suma) {
        contador++
        arregloSuma[0]=contador;
        }   
    }

