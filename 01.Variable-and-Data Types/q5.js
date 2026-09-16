// Part A – Object
let student = {
    name:"Praveen Prajapati",
    age:18,
    isEnrolled:true
}
console.log(student)
console.log(student.name)
console.log(student.age)

// Part B – Array
let numbers=[1,2,3,4,5]
let mixed=[1,"praveen",true,null]
console.log(numbers[0])
console.log(numbers[4])
console.log(mixed)
// Keeping an array with a single data type is better because:
// Easy to understand – All elements have the same kind of data.
// Faster processing – Programs can process similar data more efficiently.
// Less chance of errors – You don't need to handle different data types separately.
// Easy to perform operations – You can easily sort, search, or calculate values.

// Part C – Function
function greet(name){
    return "Hello, " +name+"!";
}
let message1=greet("praveen");
let message2=greet("sheetal");
console.log(message1)
console.log(message2)