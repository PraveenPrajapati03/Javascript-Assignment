// Q1
let info = {
    name:"praveen",
    age:17,
    address:{
        city:"nagaur",
        pincode:341001
    }
}

// Q2
console.log(info.address.city)

// Q3
let company = {
    address:{
        city:"USA",
        pincode:565656
    },
    employees:["abc","xyz"]
}

// Q4
for(let key in company.address){
    console.log(company.address[key])
}

// Q5
let student = {
    name: "Praveen",
    age: 18,
    address: {
        country: "India",
        state: "Rajsthan",
        city: {
            name: "Nagaur",
            pincode: 341001,
            location: {
                area: "near GSSS",
                landmark: "GSSS"
            }
        }
    }
}
console.log(student.name);
console.log(student.address.country);
console.log(student.address.state);
console.log(student.address.city.name);
console.log(student.address.city.pincode);
console.log(student.address.city.location.landmark);