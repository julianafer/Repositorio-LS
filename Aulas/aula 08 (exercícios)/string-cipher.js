let letras = 'abcdefghijklmnopqrstuvwxyz'

function cipher(letters, number) {
    let new_letters = ''
    letters_split = letters.split('')
    index = letras.search(letters_split[0])
    new_letters += letras[index+number]
    return new_letters
}

console.log(cipher('abc', 2))
console.log(cipher('xyz', 2))
console.log(cipher('abc', 13))
console.log(cipher('xyz', 13))