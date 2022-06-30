var numero1 = parseInt(prompt("Ingrese la cantidad que quiere sumar en cada una de las interacciones"));
var suma = 0;
for(let i=0; i < 10; i++){
    var numero2 = parseInt(prompt("Ingrese el numero que desea sumar"));
    suma = numero1 + numero2;
    console.log(suma);
}