// Q1
let student = {
    name:"praveen",
    age:17
}
student.age = 18
console.log(student)

// Q2
let person = {
    name: "Rahul",
    age: 20
}
person.name = "rahul ji"
person["age"] = 21
console.log(person)

// Q3
let product = {
    name:"iphone 18",
    price:150000,  
    availability:true
}
console.log(product)
product.name = "iphone 18 pro max"
product["price"] = 160000
console.log(product)

// Q4
let check = {
    number:18
}
console.log(check)
check.number = "45"
console.log(check)

// Q5
let student1 = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
}
console.log("Before Update:", student1)
student1.name = "praveen";
student1.age = 19;
student1.city = "mumbai";
console.log("After Update:", student1)