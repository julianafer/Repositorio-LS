function tipoTriangulo(seg1, seg2, seg3) {
    if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2) {
        if (seg1 == seg2 && seg2 == seg3) {
            return 'equilateral'
        }
        else if (seg1 !== seg2 && seg2 !== seg3 && seg3 !==seg1){
            return 'scalene'
        }
        else {
            return 'isosceles'
        }
    }
    else {
        return 'none'
    }
}
  
console.log(tipoTriangulo(2,2,2))
console.log(tipoTriangulo(10,10,10))
console.log(tipoTriangulo(3,4,4))
console.log(tipoTriangulo(4,3,4))
console.log(tipoTriangulo(4,4,3))
console.log(tipoTriangulo(10,10,2))
console.log(tipoTriangulo(3,4,5))
console.log(tipoTriangulo(10,11,12))
console.log(tipoTriangulo(5,4,2))
console.log(tipoTriangulo(0,0,0))
console.log(tipoTriangulo(3,4,-5))
console.log(tipoTriangulo(1,1,3))
console.log(tipoTriangulo(2,4,2))  