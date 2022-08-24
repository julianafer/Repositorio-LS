// arryas
// const arr = [1,3,5,8,'LS 2022.2 B',null ];
// console.log(arr);
// console.log(arr[2])
// console.log(Array.isArray(arr));

//  delete arr[4];
// arr.pop()
// arr.splice(1,1)
// console.log(arr);
// console.log( typeof arr[arr.length -1])
// console.log(arr.concat([2,8]));
// console.log(...arr,2,8)
// console.log(...arr,...[7,3])

//iteração
const arr = [1,2,3]
// for (let flag = 0;flag < arr.length; flag++ ){
//     console.log(arr[flag]);}
// // for in..
console.log('Segunda maneira')
for (const indice in arr){
    console.log(arr[indice]);}


console.log('Terceira maneira')
// 3 for of
for (const valor of arr){
    console.log(valor);
}

// 4 - While
const periodo = 1;
while (periodo >= 2){
    console.log('Oportunidades de bolsas')

}

do {
    console.log("Do..While - Imprimir oportunidades de bolsas ")
}while(periodo >= 2);


//  funções de api do js

const a = [];

a.push(10)
a.push(20)

//console.log(a);
a.push(30);
a.unshift(40);
console.log(a);
a.splice(2,0,15,16);
//console.log(a)

// remoção
a.shift();
//console.log(a)

console.log(a.pop())
a.splice(1,2)
//console.log(a)
// console.log(a.splice(1,2))



// Ordenação
const arrayNumbers =[2,8,5,30,9,3,10];
const comparar = function(a,b){
    return a - b;
}
arrayNumbers.sort(comparar)
// function comparar(a,b){
//     return a -b;


// }
console.log(arrayNumbers.join(" - "));
console.log(arrayNumbers.includes(5));
console.log("Slice" + arrayNumbers.slice(4));
console.log("Slice" + arrayNumbers.slice(4,5));

