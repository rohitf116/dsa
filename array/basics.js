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
// console.log(xor([1,2,3,4,5,1,2,3,4]))

//union of array no duplicates

// const a = [1,  5,10]
// const b = [2, 4, 8, 9]
const union = (a, b) => {
    const result = []
    let i = 0
    let j = 0
    while (i < a.length && j < b.length) {
        const one = a[i]
        const two = b[j]
        if (two < one) {
            result.push(b[j++])
        } else {
            result.push(a[i++])
        }
    }
    while (i < a.length) {
        result.push(a[i++])
    }
    while (j < b.length) {
        result.push(b[j++])
    }
    return result
}

// console.log(union(a,b))

//3.intersection of two arrays
const a = [1, 2, 3, 4, 6, 8]
const b = [3, 4, 9, 10]
const intersectionOfTwoArrays = (a, b) => {
    const seen = {}
    const result=[]
    for (let i = 0; i < a.length; i++){
        const cur = a[i]
        seen[cur]=true
    }
    for (let i = 0; i < b.length; i++){
        const cur = b[i]
        if(seen[cur]) result.push(cur)
    }
    return result
}
// console.log(intersectionOfTwoArrays(a,b))

const twoSum = (arr, target) => {
    const seen = {}
    for (let i = 0; i < arr.length; i++){
        const curr = arr[i]
        if (seen[curr]>0) return [seen[curr], i]
        const numToFind = target - curr
        seen[numToFind]= i
    }
    console.log(seen)
    return []
}

// console.log(twoSum([1,7,5,22,3,9,2],9))

const triplet = (arr, target) => {
    arr = arr.sort((a, b) => a - b)
    const seen = {}
    const len = arr.length
    const result=[]
    for (let i = 0; i < len; i++){
        let outerValue = arr[i]
        let left = i + 1
        let right = len - 1
        while (left < right) {
            const tripSum = outerValue + arr[left] + arr[right]
            if (tripSum === target) {
                result.push([i, left, right])
                left++
                right--
            }else if (tripSum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return result
}

console.log(triplet([10,20,30,40,50],80))