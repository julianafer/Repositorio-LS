// JSON - JavaScript Object Notation

const student1 = {
    name: 'Juliana Ferreira',
    email: 'meu@email.com'
}

console.log(student1['name'])
console.log(student1.name)

// Class

class Student {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

const student2 = new Student('Carlos', 'carlos@email.com')
console.log(student2)

// Property Shorthand

const email = 'juliana@email.com'
const name = 'Juliana'

//const person = {email: email, name: name}
const person = {email, name}

// clone
const person2 = {...person, phone: '40028922'}
console.log(person2)