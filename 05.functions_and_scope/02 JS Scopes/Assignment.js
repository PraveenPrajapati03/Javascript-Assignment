// JavaScript Assignment: Scope and Hoisting
// Section 1: What Is Scope? (5 Questions)
// 1
var city = "Surat";
function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}
display();
// global scope variable : city
// variable inside function : country
// Yes, both variables be accessed inside "display()"

// 2
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
// Output==>550 500

// 3
var college = "ABC College";
function student() {
    var name = "Rahul";
    var age = 20;
}
function teacher() {
    var subject = "JavaScript";
}
// global scope variable : college
// function scope variable : name, age, subject

// 4
function first() {
    var number = 100;
}
function second() {
    console.log(number);
}
first();
second();
// give ReferenceError: number is not defined because in first function variable number is defined that is number is functional scope variable do not execute or not accessible in another function and outside function

// 5
// Global scope variable
let globalVar = "I am a global variable";
function showVariables() {
    // Local scope variable
    let localVar = "I am a local variable";
    // Print both variables inside the function
    console.log(globalVar);
    console.log(localVar);
}
showVariables();
// Print the global variable outside the function
console.log(globalVar);


// Section 2: Global Scope (5 Questions)
// 6
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);
// Output==>I like Cricket  Cricket

// 7
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
    // This function changes the global variable to "Gujarati" because it assigns a new value to language without declaring a new local variable.
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);
// Both functions access the same global variable.
// When changeLanguage() updates language, the change persists, so subsequent reads return "Gujarati" instead of "English".

// 8
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();
// why this is not produce any error
// the function is called after the variable marks has been assigned a value.
// In JavaScript, a function can access global variables declared outside it. Since displayMarks() is called after marks is assigned the value 75, the code executes without an error.
// Why? JavaScript's var declaration is hoisted to the top of its scope. The declaration is available before its assignment, but its initial value is undefined.

// 9
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
console.log(message);// ReferenceError: message is not defined because message variable define inside function that is functional scope variable .
// functional scope variable do not execute or not accessible outside function.

// 10
var school = "Sunrise School";
function showSchool(){
    console.log(school)
}
function updateSchool(){
    school="Green Valley School"
}
showSchool();
updateSchool();
showSchool();
console.log(school);


// Section 3: Function Scope (5 Questions)
// 11
function calculateTotal() {
    var first = 100;
    var second = 200;
    console.log(first + second);
}
calculateTotal();
console.log(first); // ReferenceError: first is not defined because first variable define inside function that is functional scope variable .
// functional scope variable do not execute or not accessible outside function.

// 12
function employee() {
    var salary = 30000;
}
employee();
console.log(salary); // ReferenceError: salary is not defined because salary variable define inside function that is functional scope variable .
// functional scope variable do not execute or not accessible outside function.

// 13
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
// Output==>25 15
// Both variables have the same name, but they are separate variables. 
// The local variable exists only inside test(), so changing or using it does not affect the global variable.

// 14
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();
// Output==>50 50
// Each function call creates a new execution context with its own local result variable. The variable is initialized to 40 on every call.
// No, not directly. The local variable result is accessible only within the function. After the function finishes, it cannot be accessed by its name from outside the function.

// 15
function calculateArea(){
    let length = 8;
    let width = 4;
    let area = length*width;
    console.log(area)
}
calculateArea()


// Section 4: No Block Scope with "var" (5 Questions)
// 16
if (10 > 5) {
    var result = "Success";
}
console.log(result);
// Output==>Success
// Because var is function-scoped, not block-scoped.In JavaScript, var does not create a separate scope for an if block.

// 17
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);
// Output==>2
// If you use let, the variable inside the block is separate:If you use let, the variable inside the block is separate:
// var is function-scoped, so an if block does not create a separate scope for it.
// let and const are block-scoped, so variables declared inside { } are separate from outer variables.

// 18
var message = "Start";
{
    var message = "End";
}
console.log(message);
// Output==>End
// No! A standalone block { } does not create a separate scope for var in JavaScript.

// 19
if (false) {
    var result = 100;
}
console.log(result);
// Output==>undefined
// yes

// 20
if (true) {
    let secret = "Hidden";
}
console.log(secret);
// let is a block scope variable.do not accessible outside block.


// Section 5: Block Scope with Loops (5 Questions)
// 21
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);
// Output==>2 4 6 Final: 8
// Because var is function-scoped, not block-scoped.In JavaScript, var does not create a separate scope for an if block.
// var can accessible outside block.

// 22
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
// Output==>1 2 3 Count: 4
// Because var is not block-scoped, the loop does not create a separate count variable. Both declarations refer to the same variable.
// Using var with the same variable name in the for loop changes the existing variable, and its final value remains accessible after the loop.

// 23
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
// Output==>5 4 3 After loop: 2
// Yes, Because var is function-scoped, not block-scoped.In JavaScript, var does not create a separate scope for an if block.var can accessible outside block.

// 24
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
// no, the final statement cause an no error.
// Item: 1 Item: 2 Item: 3 Last item: 4

// 25
for (let step = 1; step <= 4; step++) {
    console.log(step);
}
console.log(step);
// 1 2 3 4 ReferenceError: step is not defined
// let is block-scoped.The variable step exists only inside the for loop.


// Section 6: Function Scope Inside Loops (5 Questions)
// 26
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
// Output==>10 20 30 Final: 4
// Because var is function-scoped, not block-scoped.In JavaScript, var does not create a separate scope for an if block.var can accessible outside block.

// 27
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();// Output==>60 70 80 90
console.log(marks);// ReferenceError: marks is not defined var is function-scoped.A variable declared inside a function cannot normally be accessed outside that function

// 28
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();
// Output==>5 6 7 Final value: 8
// 3 times loop execute

// 29
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
// console.log(i);//ReferenceError: i is not defined var is function-scoped.A variable declared inside a function cannot normally be accessed outside that function
calculate();

// 30
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    // Access the loop variable inside the function
    console.log("After loop:", i);
}
printNumbers();
// Attempt to access the variable outside the function
console.log(i);


// Section 7: Hoisting with "var" (5 Questions)
// 31
console.log(score);
var score = 90;
console.log(score);
// The first line does not cause and error because the variable is declared using `var` which is a functional scope and the variable declared by it get hoisted to the top of the code.

// 32
var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();
// Output==>undefined 20
// JavaScript function ke andar local a ko pehchanta hai.
// Local a abhi initialize nahi hua, isliye uski value undefined hai.
// JavaScript global a = 10 use nahi karta, kyunki local variable usko shadow karta hai.
// The reason is variable hoisting in JavaScript.
// When JavaScript executes the test() function, it treats the local declaration var a as if it were declared at the beginning of the function.

// 33
console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);
// The first and statement `console.log(first)` and `console.log(second)` produce undefined as they are written above the variable declaration and the `var` make thm hoisted.

// 34
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();
// Output==>undefined 50
// The first console.log(total) prints undefined because the var total declaration is hoisted to the top of the function, but its assignment has not happened ye
// Rewrite the code to represent hoisting
function calculate() {
    var total;             // Declaration is hoisted
    console.log(total);    // undefined
    total = 50;             // Assignment stays here
    console.log(total);    // 50
}
calculate();

// 35
var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);
// Inside the function, the variable is declared after the print statement.
// The re-declaration of variable inside the function is local-scope, by which, it can'tbe accessed outside of the function block
// first `console.log()` function print undefined
// final `console.log()` funtion print 100
// The hoisting make the first `console.log()` statement, print undefined instead of 100


// Section 8: Function Declaration Hoisting (5 Questions)
// 36
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
// Output==>Hello from CodingGita
// This works because of function hoisting in JavaScript.
// Function hoisting means that JavaScript makes function declarations available before the code executes, allowing you to call a function before its declaration appears in the code.

// 37
display();
function display() {
    console.log("Function is hoisted completely");
}
// Output==>Function is hoisted completely
// The function can be called before its declaration.	|   The variable can be accessed before its assignment.
// The entire function is available.	                    |   Only the declaration is hoisted; the assigned value is not.
// Calling it works before the declaration.         	    |   Accessing it before assignment returns undefined.

// 38
greet();
var greet = function() {
    console.log("Hi");
};
// Yes, because The variable can be accessed before its assignment.Only the declaration is hoisted; the assigned value is not.Accessing it before assignment returns undefined.

// 39
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
// Output==>function
// I am hoisted

// 40
var message = "Hello from CodingGita!";
sayHello();
function sayHello() {
    console.log(message);
}


// Section 9: Scope Chain (5 Questions)
// 41
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
// Output==>2025 CSE CodingGita
// process
// JavaScript looks inside the current scope
// If not found, goes to the next outer scope
// Continues until global scope
// If not found anywhere → error

// 42
var globalVar2 = "I am global";
function outer() {
    var outerVar = "I am outer";
    function inner() {
        console.log(globalVar2);
        console.log(outerVar);
        console.log(innerVar); // this line
    }
    inner();
}
outer();
// give ReferenceError: innerVar is not defined because innerVar is not defined

// 43
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();
// all variable accessible inside deep() function JavaScript uses lexical scoping, 
// which means a function can access variables declared in its own scope and in the outer scopes where it was defined.

// 44
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
first();
console.log(x);
// Output==>first global
// First console.log(x) inside second(): JavaScript looks for x inside second(). It doesn't find one. It checks the outer scope, first(), where x = "first". Therefore, it prints first.
// Second console.log(x) outside first(): JavaScript looks for x in the global scope. The global variable has the value "global". Therefore, it prints global.

// 45
var globalVar1 = "Global Scope";
function outer() {
    var outerVar = "Outer Function";
    function middle() {
        var middleVar =  "Middle Function";
        function inner() {
            var innerVar = "Inner Function";
            console.log(innerVar);
            console.log(middleVar);
            console.log(outerVar);
            console.log(globalVar1);
        }
        inner();
    }
    middle();
}
outer();


// Section 10: Variable Shadowing (5 Questions)
// 46
var score = 50;
function test() {
    var score = 90;
    console.log(score);
}
test();
console.log(score);
// Output==>90 50
// A local variable can override a global variable with the same name.
// The inner value does not overwrite the outer value; it only hides it inside the function.

// 47
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);
// Output==>Local Name  Global Name
// Not, local variable does not change global variable because A local variable can override a global variable with the same name.
// The inner value does not overwrite the outer value; it only hides it inside the function.

// 48
var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);
// Output==>20 20
// in the previous question the local variable can override global variable with the same name do not upadate inner loop variable execute inside only not at outside.
// but in this value of value variable is updated inside function that reason outside printed new value.

// 49
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);
// Output==>Inside: Red
// Output==>Outside: Blue

// 50
var marks = 70;
function inner(){
    marks = 95;
    console.log(marks)
}
inner();
console.log(marks);


// Section 11: Nested Functions (5 Questions)
// 51
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
// Output==>Jenil  Kartik Sir
// No, you cannot directly access teacher or student outside outer() because both variables are declared inside functions.

// 52
function parent() {
    var a = "Parent";
    function child() {
        var b = "Child";
        function grandchild() {
            var c = "Grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
// Output==>Parent  Child  Grandchild
// a: JavaScript searches the grandchild() scope, then child(), and finally finds a in parent().
// b: JavaScript searches the inner scopes and finds b in child().
// c: JavaScript finds c directly in grandchild().

// 53
function outer() {
    var secret = "Hidden";
    function inner() {
        console.log(secret);
    }
}
inner();
outer();
// ReferenceError: inner is not defined
// JavaScript mein function ki declaration aur uski accessibility alag concepts hain.
// inner() ko outer() ke andar define karne se woh automatically global scope mein available nahi hota. Ye lexical scope ka rule hai.

// 54
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
// Output==>Hello students
// because JavaScript searches the inner scopes and finds greeting in createMessage function.

// 55
function studentInfo() {
    var name = "praveen";
    var course = "B.Tech CSE (AI)";
    function display() {
        console.log("Name:", name);
        console.log("Course:", course);
    }
    display();
}
studentInfo();


// Section 12: Common Errors with var (5 Questions)
// 56
function test() {
    x = 100; // missing var
}
test();
console.log(x);
// missing of var 
// In JavaScript's non-strict mode, assigning a value to an undeclared variable creates a property on the global object in typical browser environments.
// The variable x was probably intended to be local to test(), but it becomes globally accessible instead.

// 57
if (true) {
    var x = 20;
}
console.log(x);
// Output==>20
// because var is function-scoped, not block-scoped.
// Beginners often assume that curly braces {} always create a separate scope. However, var does not follow block scope.

// 58
console.log(a); // undefined
var a = 10;
// JavaScript moves variable declarations to the top of their scope before executing code.
// But only the declaration is moved, not the assignment.

// 59
var x = 10;
var x = 20;
console.log(x);
// no issue inside code
// var is allowed redeceration and reassignment
// var allows redeclaration in the same scope, which can cause accidental overwrites. 
// Prefer let for reassigned variables and const for variables that should not be reassigned.

// 60
function calculate() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();