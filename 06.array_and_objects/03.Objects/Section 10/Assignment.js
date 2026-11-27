// Q1
let check = {
    name:"praveen",
    age:17
}
for (let key in check){
    console.log(key)
}

// Q2
for (let key in check){
    console.log(check[key])
}

// Q3
for (let key in check){
    console.log(`${key}:${check[key]}`)
}

// Q4
let count = 0
for (let key in check){
    count++
}
console.log(count)

// Q5
let student = {
    name:"praveen",
    age:17
}
for(let key in student){
    if (typeof student[key]==="number"){
        console.log(student[key])
    }
}