// Q1
let subjects = ["CSS", "JavaScript"]
subjects.unshift("HTML")
console.log(subjects)

// Q2
let numbers = [20, 30]
numbers.unshift(5,10)
console.log(numbers)

// Q3
let cities = []
cities.unshift("jodhpur")
cities.unshift("jaipur")
cities.unshift("bikaner")
console.log(cities)

// Q4
// Adds one or more elements at the beginning.

// Q5
// Yes, unshift() can add multiple elements at the beginning of an array at the same time, shifting the existing elements to the right.
let arr = [3, 4]
arr.unshift(1, 2)
console.log(arr)