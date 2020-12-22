/*2-  Crear un script que solicite al usuario 
mediante un prompt el nombre de ciudades y
almacenarlas en un arreglo, 
cuando el usuario seleccione cancelar o ingrese el valor “0”
se debe mostrar el arreglo generado,
luego realizar las siguientes acciones:

-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera,
tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad
de 'Barcelona'.



*/
let bandera=true;
let ciudad;
let arregloCiudad=[];

while (bandera==true) {
    if (bandera==true) {
        ciudad=prompt("Ingrese la ciudad");
        if(ciudad===null||ciudad=="0"){ 
            bandera=false;
            break;
        }
        arregloCiudad.push(ciudad);
    } 
}
for (let index = 0; index < arregloCiudad.length; index++) {
    document.write(arregloCiudad[index]+"</br>");
}
document.write("La longitud del arreglo es: "+arregloCiudad.length+"</br>");
document.write("En la primer posicion se encuentra: "+arregloCiudad[0]+"</br>");
document.write("En la tercer posicion se encuentra: "+arregloCiudad[2]+"</br>");
document.write("En la ultima posicion se encuentra: "+arregloCiudad[(arregloCiudad.length-1)]+"</br>");
arregloCiudad.push("Paris");
document.write("En la segunda posicion se encuentra: "+arregloCiudad[1]+"</br>");
arregloCiudad[1]="Barcelona";

for (let index = 0; index < arregloCiudad.length; index++) {
    document.write(arregloCiudad[index]+"</br>");
}