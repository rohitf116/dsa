//1. find unique elements
const findUniqueElement = arr => {
    const seen={}
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        seen[current] = (seen[current] || 0) + 1
    }
    for (let [key,val] of Object.entries(seen)) {
        if(val===1) return key
    }
    return null
}

// console.log(findUniqueElement([1,2,3,4,5,1,2,3,4]))

const xor = (arr) => {
    let sum = 0
    for (let item of arr) {
        sum ^=item
    }
    return sum
}
console.log(xor([1,2,3,4,5,1,2,3,4]))