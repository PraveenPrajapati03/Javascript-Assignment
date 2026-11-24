// Q1
let subjects = ["HTML", "CSS", "JavaScript","Python"]
let s = subjects.join(" | ")
console.log(s)

// Q2
let subject = ["HTML", "CSS", "JavaScript"]
let p = subject.join(" - ")
console.log(p)

// Q3
let arr = ["HTML", "CSS", "JavaScript"]
let a = arr.join(" / ")
console.log(a)

// Q4
// If you do not pass any separator to join(), JavaScript uses a comma (,) by default to separate array elements.
let array = [1, 2, 3]
console.log(array.join())

// Q5
// join() returns a string, not an array. It combines all array elements into a single string.