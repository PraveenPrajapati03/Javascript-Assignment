// Q1
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208
}

// Q2
let student = {
    name:"praveen",
    age:18,
    isStudent:true
}

// Q3
let person = {
    name: "praveen",                  
    age: 18,                         
    isStudent: true,                
    hobbies: ["reading", "coding"],  
    address: {                     
        city: "Nagaur",
        pincode: 341001
    }
}

// Q4
let person1 = {
    name: "praveen",                  
    age: 18,                         
    isStudent: true,                
    hobbies: ["reading", "coding"],  
    address: {                     
        city: "Nagaur",
        pincode: 341001
    },
    greet: function(){            
        return "Hello, " + this.name;
    }
}

// Q5
let student1 = {
    name: "Praveen",
    greet: function() {
        return "Hello, my name is " + this.name;
    }
}