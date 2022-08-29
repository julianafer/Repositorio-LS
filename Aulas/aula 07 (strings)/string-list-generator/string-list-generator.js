function createList(num, string='Text') {

    let lista = '<ul>\n'
    let flag = 0;

    do {
        lista += '  <li>' + string + ' ' + (flag+1) + '</li>\n'
        flag += 1;
    } while (flag < num);

    lista += '<ul>'

    return lista
}

console.log(createList(5))
console.log(createList(5, 'Item'))
