//1. Conceptual Understanding
//A function in JavaScript is a reusable block of code designed to perform a specific task. It executes when it is called.
//Four Advantages of Using Functions
//1. Code Reusability: A function can be used multiple times without writing the same code again.
//2. Reduces Code Duplication: Functions avoid repeating the same code in different parts of a program.
//3. Easy Debugging: Functions make it easier to identify and fix errors in a program.
//4. Improves Readability: Functions divide a large program into smaller, manageable blocks, making the code easier to understand.

//2. Function Declaration
function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}
console.log(greetStudent("Rahul"));
console.log(greetStudent("Priya"));

// 3. Hoisting
// Hoisting is a JavaScript behavior in which function declarations can be called before they appear in the code
greet(); // Function called before its definition
function greet() {
    console.log("Hello, Student!");
}
// First, we call greet() before writing its definition.JavaScript processes the function declaration so that the function can be called before its position in the code.Therefore, the function executes successfully and prints "Hello, Student!"
// Function declarations are hoisted, meaning JavaScript makes the function available before executing the code line by line.

//4
let calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
}
console.log(calculateAverage(80,90,70))

//5
function multiply(x, y) {  // x and y are parameters
    return x * y;
}
console.log(multiply(12, 5)); // 12 and 5 are arguments

//6
function isEven(number){
    return number%2==0
}
console.log(24)
console.log(17)

//7
function findPercentage(obtainedMarks,totalMarks){
    return (obtainedMarks/totalMarks)*100
}
console.log(findPercentage(456,500))

//8
function greet() {
    console.log("Hello, Student!");
}
let result8 = greet();
console.log(result8);

//9
function calculateSimpleInterest(principal,rate,time){
    return SI = (principal * rate * time) / 100
}
console.log(calculateSimpleInterest(1000,5,2))

//10
//a
//Function Declaration: Can be called before it is defined because it is hoisted.
//Function Expression: Cannot be called before it is initialized when declared using const or let.
// Function declaration
greet();
function greet() {
    console.log("Hello!");
}
// Function expression
const sayHello = function() {
    console.log("Hi!");
};
sayHello();

//b
function student_data(name,marks){
    return `Student ${name} has scored ${marks} marks.`
}
console.log(student_data("praveen",90))
console.log(student_data("sheetal",90))

//11
//a
//a.1 Local Scope: A variable declared inside a function is called a local variable. It can only be accessed inside that function.\
function greet1(){
    let x = "hello"
    return x
}
// console.log(x) // not works because x is local scope thet is error ReferenceError: x is not defined
console.log(greet1())
//a.2 Global Scope: A variable declared outside all functions is called a global variable. It can be accessed both inside and outside a function, provided it is not shadowed by a local variable.
let msg = "hello";
function greet2(){
    console.log(msg)
}
greet2()
console.log(msg)

//b.1
function displayAge(){
    let age=20;
    console.log(age)
}
displayAge()
//console.log(age) //that give ReferenceError: age is not defined
//b.2
let course = "JavaScript";
function displayCourse(){
    console.log(course)
}
displayCourse()
console.log(course)


//12
function analyzeStudent(name,m1,m2,m3){
    let total = m1 + m2 + m3;
    let average = (total / 3).toFixed(2);
    return `The student ${name} gets a total marks = ${total} and an average = ${average}`;
}
console.log(analyzeStudent("praveen", 77, 85, 92));
console.log(analyzeStudent("sheetal", 97, 95, 92));


//13
//a
//A nested function is a function defined inside another function. The inner function can access variables of its outer function.

//b
function studentReport(name, s1, s2, s3) {   
    function total(a, b, c) {
        return a + b + c;
    }
    let totalmarks = total(s1, s2, s3);
    return name + " total marks: " + totalmarks;
}
console.log(studentReport("dev", 57, 80, 52));


//14
function generateReport(name,m1,m2,m3){
    let total = m1 + m2 + m3;
    let average = (total / 3).toFixed(2);
    let result = average>=40?"Pass":"Fail";
    return `The student ${name} gets a total marks = ${total} and an average = ${average} and their result is :${result}`;
}
console.log(generateReport("Aniket", 77, 85, 92));
console.log(generateReport("Ankit", 27, 25, 34));


//15
//1
function sumOfThree(a, b, c){
    return a+b+c;
}
console.log(sumOfThree(1,2,3));

//2
function averageOfTwo(x, y){
    return (x+y)/2
}
console.log(averageOfTwo(56,55))

//3
function maxOfTwo(a, b){
    let max = a>b?a:b;
    return max
}
console.log(maxOfTwo(1,3))

//4
function fullName(first, last){
    return first+" "+last
}
console.log(fullName("Praveen","Prajapati"))


//16
let calculateGrade=function(percentage){
    let result = percentage>=90?"A+":percentage>=80?"A":percentage>=70?"B":percentage>=60?"C":percentage>=40?"D":"F";
    return result
}
console.log(calculateGrade(95))
console.log(calculateGrade(82))
console.log(calculateGrade(67))
console.log(calculateGrade(45))
console.log(calculateGrade(32))


//17
function calculateFinalPrice(price,discountPercent){
    let finalPrice = price - (price * discountPercent / 100)
    return finalPrice
}
console.log(calculateFinalPrice(2500,15))
console.log(calculateFinalPrice(1200,10))


//18
//1
function celsiusToFahrenheit(c){
    return (c * 9/5) + 32
}
console.log(celsiusToFahrenheit(32));
console.log(celsiusToFahrenheit(25));

//2
function fahrenheitToCelsius(f){
    return (f - 32) * 5/9
}
console.log(fahrenheitToCelsius(100))
console.log(fahrenheitToCelsius(273))


//19
//a
//No, a function expression cannot normally be called before it is defined. This is because function expressions are not hoisted in the same way as function declarations.
greet(); // ReferenceError: Cannot access 'greet' before initialization
const greet = function() {
    console.log("Hello!");
};

//b
function calculateTotal(price, quantity) {
    function getTotal() {
        return price * quantity;
    }
    return getTotal();
}
let result = calculateTotal(100, 3);
console.log("Total Price:", result);


//20
//1
function processStudent(name, m1, m2, m3){
    function total(m1,m2,m3){
        return m1+m2+m3;
    }
    function avg(m1,m2,m3){
        return (m1+m2+m3)/3
    }
    let result = avg(m1,m2,m3)>=40?"Pass":"Fail";
    return `The student ${name} gets a total marks = ${total(m1,m2,m3)} and an average = ${avg(m1,m2,m3)} and their result is :${result}`;
}

//2
console.log(processStudent("Praveen",95,94,93))
console.log(processStudent("motu",55,74,63))
console.log(processStudent("jony",15,24,33))

//3
function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher.";
    } else if (avg2 > avg1) {
        return "Second average is higher.";
    } else {
        return "Both averages are equal.";
    }
}
console.log(compareAverages(80, 70));