function loop() {
    let resultado = '';
  
    for (let x = 0; x < 100; x++) {
        if (x < 10) {
            resultado += '0' + x;
        } else {
            resultado += x;
        }
        if (x % 10 === 9) {
            resultado += '\n';
        } else {
            resultado += ', ';
        }
    }
  
    return resultado;
}

console.log(loop())
