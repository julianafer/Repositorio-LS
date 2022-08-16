function calculadora(n1, n2, op) {
    if (op === '+') {
        resultado = n1 + n2
        return resultado;
    }
    else if (op === '-') {
        resultado = n1 - n2
        return resultado;
    }
    else if (op === '*') {
        resultado = n1 * n2
        return resultado;
    }
    else if (op === '/') {
        resultado = n1 / n2
        return resultado;
    }
}

console.log(calculadora(180, 180, '+'))