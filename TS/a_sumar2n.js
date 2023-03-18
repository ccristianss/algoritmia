"use strict";
exports.__esModule = true;
var readline = require("readline");
var leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sumar2n(numero1, numero2) {
    return numero1 + numero2;
}
leer.question('Ingrese el primer numero: ', function (n1) {
    var num1 = parseInt(n1);
    leer.question('Ingrese el segundo numero: ', function (n2) {
        var num2 = parseInt(n2);
        var resultado = sumar2n(num1, num2);
        console.log('El resultado de la suma es: ', resultado);
        leer.close;
    });
});
