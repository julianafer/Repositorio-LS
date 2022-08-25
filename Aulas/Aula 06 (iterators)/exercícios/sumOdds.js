let numbers1 = [1, 2, 3].filter(n=> n % 2 != 0)
const sum1 = numbers1.reduce((a,b) => a+b,0)
console.log(sum1)

let numbers2 = [2, 2, 2].filter(n=> n % 2 != 0)
const sum2 = numbers2.reduce((a,b) => a+b,0)
console.log(sum2)

let numbers3 = [1, 2, 3, 4, 5, 6].filter(n=> n % 2 != 0)
const sum3 = numbers3.reduce((a,b) => a+b,0)
console.log(sum3)