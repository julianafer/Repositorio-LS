function calc(numero1, numero2, operador) {
    if (operador === '+') {
        resultado = numero1 + numero2
        return resultado;
    }
    else if (operador === '-') {
        resultado = numero1 - numero2
        return resultado;
    }
    else if (operador === '*') {
        resultado = numero1 * numero2
        return resultado;
    }
    else if (operador === '/') {
        resultado = numero1 / numero2
        return resultado;
    }
}

console.log(calc(1, 1, '+'))
console.log(calc(1, 1, '-'))
console.log(calc(1, 1, '*'))
console.log(calc(1, 1, '/'))