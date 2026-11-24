// Q1
let students = ["Jenil", "Mahir", "Arjun"]
students.splice(1,0,"Krishna")
console.log(students)

// Q2
let arr = [10, 20, 30, 40, 50]
arr.splice(1,2,15)
console.log(arr)

// Q3
let numbers = [100,200,300]
numbers.splice(1,1,250)
console.log(numbers)

// Q4
// slice(): Returns a portion of an array without changing the original array.
// splice(): Adds, removes, or replaces elements and changes the original array.

// Q5
// Yes, splice() changes (mutates) the original array by adding, removing, or replacing elements.