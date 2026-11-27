// Q1
let check = {
    display:function(){
        return "welcome to javascript"
    }
}
console.log(check.display())

// Q2
let info = {
    name:"praveen",
    display:function(){
        return `my name is ${this.name}`
    }
}
console.log(info.display())

// Q3
let student = {
    name:"praveen",
    marks:100,
    getDetails:function(){
        return `Name: ${this.name}, Marks: ${this.marks}`
    }
}
console.log(student.getDetails())

// Q4
let person = {
    name:"praveen",
    marks:100,
    checkPassed:function(){
        if (this.marks>=40){
            return "Passed"
        }else{
            return "Failed"
        }
    }
}
console.log(person.checkPassed())

// Q5
let person1 = {
    firstName: "Rahul",
    lastName: "Kumar",
    age: 20,
    getFullName: function() {
        return this.firstName + " " + this.lastName
    },
    isAdult: function() {
        return this.age >= 18
    }
}
console.log("Full Name:", person1.getFullName())
console.log("Adult Status:", person1.isAdult())