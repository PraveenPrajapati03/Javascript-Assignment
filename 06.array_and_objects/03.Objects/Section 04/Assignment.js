// Q1
let student = {
    name:"praveen",
    age:18
}
console.log(student.name)
console.log(student.age)

// Q2
let person = {
    name:"praveen",
    "full name":"praveen prajapati",
    age:18
}
console.log(person["full name"])

// Q3
let product = {
    name:"iphone 18",
    price:150000,  
    availability:true
}
let key = "name"
console.log(product[key])

// Q4
let info = {
    name:"praveen",
    age:18,
    collage:"cg",
    city:"nagaur",
    "mobile number":9876543219
}
console.log(info.name)
console.log(info.age)
console.log(info["collage"])
console.log(info["city"])
let p = "mobile number"
console.log(info[p])

// Q5
let person1 = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
}
let key1 = "name"
console.log(person1[key1]) //correct
console.log(person1.key1) //incorrect