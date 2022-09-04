function cipher(entrada, quantidade) {

    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let entrada_codificada = ''

    for (let i = 0; i < entrada.length; i++) {
        const index = alfabeto.search(entrada[i])
        const newIndex = (index + quantidade) % 26
        entrada_codificada += alfabeto[newIndex]
    }

    return entrada_codificada
}

console.log(cipher('abc', 2))
console.log(cipher('xyz', 2))
console.log(cipher('abc', 13))
console.log(cipher('xyz', 13))