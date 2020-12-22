/*1- Escribir el código de una función a la que se pasa como parámetro
un número entero y devuelve como resultado una cadena de texto que 
indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función.*/


function ejercicio1(numero) {
    let paridad;
    if (numero%2==1) {
        paridad="IMPAR"
    } else {
        paridad="PAR"
    }
    return paridad;
}
document.write(ejercicio1(6));
document.write("</br>");
/*

2- Definir una función que muestre información sobre una cadena de 
texto que se le pasa como argumento. A partir de la cadena que se le
pasa, la función determina si esa cadena está formada sólo por
mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function ejercicio2(cadena) {
    let propiedadCadena="Es una mexcla de mayusculas y minusculas";
    if (cadena==cadena.toLowerCase()) {
        propiedadCadena="Es una cadena de minusculas"
    } 
    if (cadena==cadena.toUpperCase()) {
        propiedadCadena="Es una cadena de mayusculas"
    }
    return propiedadCadena;
}
document.write(ejercicio2("hola"));

/*
3- Solicitar por pantalla al usuario ingresar el valor de los lados de un
rectángulo, luego crear una función para calcular su perímetro y
mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/
function ejercicio3(params) {
    
}

/*
4- Escriba un script que muestre la tabla de multiplicar de un número 
ingresado por pantalla, la creación de la tabla debe ser realizada con 
una función y mostrar solo los resultados del 1 al 10 del número elegido 
por el usuario.
*/