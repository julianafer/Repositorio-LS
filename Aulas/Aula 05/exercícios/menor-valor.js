function min(...values) {
    return Math.min(...values)
}

console.log(min(1,4,2,6,10,3))
console.log(min(1,4,-1,2,6,10,3))

function max(...values) {
    let maxValue = values[0]
    for (let value of values) {
        if (value > maxValue) {
            maxValue = value
        }
    }
    return maxValue
}

console.log(max(1,4,2,6,10,3))
