function utilitarios(string, util) {

    if (util == 'uppercase') {
        return string.toUpperCase()
    }

    if (util == 'lowercase') {
        return string.toLowerCase()
    }

    // if (util == 'camelcase') {

    // }

    // if (util == 'snakecase') {
    //     return string.replace(' ','_')
    // }

    // if (util == 'reverse') {
    //     return str.split("").reverse().join("")
    // }

    // if (util == 'countchar') {
    //     return string.toLowerCase()
    // }

    // if (util == 'countword') {
    //     return string.toLowerCase()
    // }

    // if (util == 'countline') {
    //     return string.toLowerCase()
    // }
}

console.log(utilitarios("lorem ipsum dolor", "uppercase"))
console.log(utilitarios("LOREM IPSUM DOLOR", "lowercase"))
console.log(utilitarios("LOREM IPSUM DOLOR", "camelcase"))
console.log(utilitarios("lorem ipsum dolor", "snakecase"))
console.log(utilitarios("lorem ipsum dolor", "reverse"))
console.log(utilitarios("lorem\nipsum dolor", "countchar"))
console.log(utilitarios("lorem\nipsum dolor", "countword"))
console.log(utilitarios("lorem\nipsum dolor", "countline"))
