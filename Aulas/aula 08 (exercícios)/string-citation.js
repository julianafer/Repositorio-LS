// função pra o normal
function camelCase(word) {
    if (word.length === 1) {
        return word.slice(0, 1).toUpperCase()
    } else if (word.length > 1) {
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    } else {
        return word
    }
}

// função pra o compacto
function firstLetter(word) {
    if (word.length === 1) {
        return word.slice(0, 1).toUpperCase()
    } else if (word.length > 1) {
        return word.slice(0, 1).toUpperCase() + '.'
    } else {
        return word
    }
}

function citation(nome, tipo) {
    let nome_split
    let citacao = ''
    if (tipo === 'normal') {
        nome_split = nome.split(' ')
        citacao += nome_split.pop().toUpperCase() + '; '
        citacao += nome_split.map(camelCase).join(' ')
        return citacao
    }

    else {
        nome_split = nome.split(' ')
        citacao += nome_split.pop().toUpperCase() + '; '
        citacao += nome_split.map(firstLetter).join(' ')
        return citacao
    }
}

console.log(citation('Luiz Carlos Rodrigues Chaves', 'normal'))
console.log(citation('Luiz Carlos Rodrigues Chaves', 'compacto'))