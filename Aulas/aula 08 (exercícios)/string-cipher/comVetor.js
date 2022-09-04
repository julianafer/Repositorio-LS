function cipher(letters, number) {

    let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let new_letters = ''

    for (let i = 0; i < letters.length; i++) {
        const index = letras.findIndex((v) => v === letters[i])
        const newIndex = (index + number) % 26
        new_letters += letras[newIndex]
    }

    return new_letters
}

console.log(cipher('abc', 2))
console.log(cipher('xyz', 2))
console.log(cipher('abc', 13))
console.log(cipher('xyz', 13))