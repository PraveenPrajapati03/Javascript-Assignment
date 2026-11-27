// Q1
let check = {
    arr:["praveen"]
}
console.log(check)

// Q2
let outer = {
    inner:{
        name:"praveen"
    }
}
console.log(outer)

// Q3
let product = {
    name:"iphone 18",
    colors:["red","blue","green"],
    manufacturer:{
        company:"apple"
    }
}
console.log(product)

// Q4
let student = {
    name:"praveen",
    age:18,
    city:"nagaur",
    getInfo:function(){
        return `My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`
    }
}
console.log(student.getInfo())

// Q5
let course = {
    title: "JavaScript",
    duration: 30,
    topics: ["Basics", "Functions", "Scope", "Arrays"],
    instructor: {
        name: "Vikram",
        experience: 12
    },
    getInfo: function() {
        return this.title + " by " + this.instructor.name
    }
}
console.log(course.getInfo())