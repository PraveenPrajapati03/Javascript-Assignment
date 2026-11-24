// Q1
let array1 = [10,20]
let array2 = [30,40]
let mainArray = array1.concat(array2)
console.log(mainArray)
console.log(array1)
console.log(array2)

// Q2
let arr1 = [1, 2]
let arr2 = [3, 4]
let result = arr1.concat(arr2)
console.log(result)

// Q3
let a1 = [1]
let a2 = [2]
let a3 = [3]
let a = a1.concat(a2).concat(a3)
console.log(a)

// Q4
// No, concat() does not change the original arrays. It returns a new array containing the combined elements.

// Q5
// Yes, you can combine more than two arrays using a single concat() call by passing multiple arrays as arguments.
let arr11 = [1, 2]
let arr12 = [3, 4]
let arr13 = [5, 6]
let result1 = arr11.concat(arr12, arr13)
console.log(result1)