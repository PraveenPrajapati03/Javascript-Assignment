// Q1
const student = {
    name: "praveen",
    age: 18,
    marks: 98
}

// Q2
const student12 = new Object()
student12.name = "praveen"
student12.age = 18
student12.marks = 98

// Q3
function Car(brand, model) {
    this.brand = brand
    this.model = model
}
let car1 = new Car("Toyota", "Fortuner")
let car2 = new Car("Tata", "Nexon")
console.log(car1)
console.log(car2)

// Q4
let employee = {
    name: "Praveen",
    age: 18,
    position: "Software Developer",
    salary: 300000
}
console.log(employee)

function Employee(name, age, position, salary) {
    this.name = name
    this.age = age
    this.position = position
    this.salary = salary
}
let employee1 = new Employee(
    "Praveen",
    18,
    "Software Developer",
    30000
)
console.log(employee1)

// Q5
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

let student1 = new Student("Praveen", 18, "B.Tech CSE")
let student2 = new Student("Rahul", 19, "BCA")
let student3 = new Student("Amit", 20, "B.Tech IT")
let students = [student1, student2, student3]
console.log(students)