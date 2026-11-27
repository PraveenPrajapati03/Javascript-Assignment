// Q1
let student = {
    name: "Sneha",
    age: 18,
    course: "CSE"
}
delete student.age
console.log(student)

// Q2
let check = {
    number: 18
}
delete check.name
console.log(check)

// Q3
let info = {
    name: "praveen",
    age: 18,
    city: "nagaur",
    collage: "cg"
}
delete info.collage
delete info.city
console.log(info)

// Q4
let person = {
    name: "Rahul",
    age: 20
}
delete person.age
console.log(person)

// Q5
let product = {
    name:"iphone 18",
    price:150000,  
    availability:true
}
delete product.availability
console.log(product,product.availability)