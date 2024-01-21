//Ejercicio 2: Nomenclatura

function f(x, y, z) { //consigna
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
}

function calculo(num1, num2, multiplicador){ //con nomenclatura
    let suma = num1 + num2;
    let producto = suma * multiplicador;
    let seno = Math.sin(producto);
    return seno;
}

let funcion = calculo(1, 1, 2);

console.log (funcion);