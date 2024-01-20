//Ejercicio 3: Pensamiento Logico

function numerosImpares(numero) {
    if (numero < 1 || !Number.isInteger(numero)) {
      console.log("Por favor, ingresa un número entero positivo.");
      return [];
    }
  
    let impares = [];
  
    for (let i = 1; i <= numero; i += 2) {
      impares.push(i);
    }
  
    return impares;
}

const numeroEntrada = 7;
const resultado = numerosImpares(numeroEntrada);
console.log(resultado); 