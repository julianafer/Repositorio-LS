function loopReverse() {
    let resultado = '';
  
    for (let x = 98; x >= 0; x -= 2) {
        if (x < 10) {
            resultado += '0' + x;
        } else {
            resultado += x;
        }
        if (x % 10 === 0) {
            resultado += '\n';
        } else {
            resultado += ', ';
        }
    }
  
    return resultado;
}
  
console.log(loopReverse());
