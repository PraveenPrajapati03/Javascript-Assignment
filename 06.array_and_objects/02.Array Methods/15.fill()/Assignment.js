// Q1
let arr = [1, 2, 3, 4, 5, 6]
arr.fill(10)
console.log(arr)

// Q2
let numbers = [1, 2, 3, 4, 5]
numbers.fill(0)
console.log(numbers)

// Q3
let movies = ["animal","kgf","sole","rrr"]
movies.fill("Hello")
console.log(movies)

// Q4
// Yes, fill() changes (mutates) the original array by replacing its elements with the specified value.

// Q5
// Yes, fill() can change only a specific part of an array by using the start and end arguments.
let array = [1, 2, 3, 4, 5]
array.fill(10, 1, 3)
console.log(array)