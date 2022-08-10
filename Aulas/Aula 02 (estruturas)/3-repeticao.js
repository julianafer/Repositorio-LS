let resultado = ''
let y = 0
for(let x = 0; x < 100; x++) {
    y++
    resultado += x + ' '
    if (y == 10) {
        resultado += '\n'
    }
    y = 0;
}
console.log(resultado)