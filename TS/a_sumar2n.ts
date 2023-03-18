import * as readline from 'readline'
const leer = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function sumar2n(numero1: number, numero2:number):number{
    return numero1+numero2;
}

leer.question('Ingrese el primer numero: ',(n1) =>{
    const num1 = parseInt(n1);
    leer.question('Ingrese el segundo numero: ',(n2) =>{
        const num2 = parseInt(n2);
        let resultado = sumar2n(num1,num2);
        console.log('El resultado de la suma es: ', resultado);
        leer.close

    });
});