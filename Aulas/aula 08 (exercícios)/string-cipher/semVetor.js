function cipher(entrada, quantidade) {

    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let saida = ''

    for (let i = 0; i < entrada.length; i++) {
        const index = alfabeto.search(entrada[i])
        const newIndex = (index + quantidade) % 26
        saida += alfabeto[newIndex]
    }

    return saida
}

console.log(cipher('abc', 2))
console.log(cipher('xyz', 2))
console.log(cipher('abc', 13))
console.log(cipher('xyz', 13))