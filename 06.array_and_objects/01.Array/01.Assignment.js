// Assignment : Arrays in JavaScript
// # 1. What Is an Array?
// 1
// An array is an ordered collection of values. Each value has a unique index (position).
// An array is a special JavaScript data structure used to store a list of values.
// Arrays are used everywhere: storing student names, marks, items in a cart, search results, etc.

// 2
// In JavaScript, the index is the position of an element inside an array. Array indexing starts at 0, not 1.

// 3
// Array indexing starts at 0, not 1.

// 4
var numbers = [10, 20, 30, 40];
// Output==>30

// 5
var numbers = [10, 20, 30, 40];
// for number 40 index value is 3.


// # 2. Creating Arrays
// 1
// Using square brackets (recommended)
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
// Using the Array constructor (less common)
var marks = new Array(85, 90, 78);

// 2
// Using square brackets (recommended)
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// 3
var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// 4
var marks = new Array(85,90,78)

// 5
// The keyword is new.


// # 3. Accessing Values in an Array
// 1
// Index — use the array index inside square brackets [] to access a specific value.

// 2
var students = ["Jenil", "Mahir", "Priyesha"];
console.log(students[0]);
// Output==>Jenil

// 3
var students = ["Jenil", "Mahir", "Priyesha"];
console.log(students[2]);
// Output==>Priyesha

// 4
var students = ["Jenil", "Mahir", "Priyesha"];
console.log(students[10]);
// Output==>undefined

// 5
console.log(colors[0]);
// Output==>ReferenceError: colors is not defined


// # 4. Updating Values
// 1
// You can update a specific value in an existing JavaScript array by using its index and the assignment operator (=).
// Use arrayName[index] = newValue;
let colors = ["Red", "Blue", "Green"];
colors[1] = "Yellow";
console.log(colors); 

// 2
var marks = [80, 75, 90];
marks[1] = 95;
console.log(marks)

// 3
// Output==>[ 80, 95, 90 ]

// 4
// False, update an array element directly using its index and the assignment operator (=). No special update() method is required.

// 5
// Yes. In JavaScript, assigning a value to an index outside the array's current bounds increases the array's length. Any skipped positions become empty slots.
// JavaScript allows it, increases the array's length, and leaves empty slots between the existing elements and the new value.
let colors5 = ["Red", "Blue"];
colors5[5] = "Green";
console.log(colors5);     
console.log(colors5.length);


// # 5. Array Length
// 1
// .length

// 2
var arr = [1, 2, 3, 4];
console.log(arr.length);
// Output==>4

// 3
// Output==>0

// 4
// The length property is useful because it tells you how many elements an array contains. 
// It is especially helpful for looping through arrays and checking their size.

// 5
// no need parentheses in length is a property


// # 6. Looping Through Arrays
// 1
// two types for loop and while loop.

// 2
// i < array.length

// 3
// The increment step (i++) is placed after the array access statement inside the while loop.

// 4
var students = ["Jenil", "Mahir", "Krishna", "Yashvi"];
for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// 5
// The loop runs one extra time and tries to access an index outside the array's bounds, resulting in undefined.

// 6
let students = ["Jenil", "Mahir", "Krishna", "Yashvi"];
for (let student of students){
    console.log(student)
}

// 7
// The main advantage of a for...of loop is that it directly gives you the values of an iterable without needing to manage indices manually. 
// This makes the code simpler, cleaner, and easier to read.

// 8
const colors1 = ["Red", "Blue", "Green"];
for (const color of colors1) {
    console.log(colors1.indexOf(color))
} // give ReferenceError: indexOf is not defined at object.<anonymous>


// # 7. Adding Elements to Arrays
// 1
// push() method → Add at the end

// 2
// unshift() method → Add at the beginning

// 3
let nums3 = [1, 2, 3];
nums3.push(4)
console.log(nums3)

// 4
let nums4 = [1, 2, 3];
nums4.push(4)
console.log(nums4)
nums4.unshift(0)
console.log(nums4)

// 5
true


// # 8. Removing Elements
// 1
// pop() method → Remove last Element of Array

// 2
// shift() → Remove first Element of Array

// 3
let nums83 = [100, 200, 300, 400, 500];
nums83.pop()
console.log(nums83)

// 4
let nums = [100, 200, 300, 400, 500];
nums.pop()
console.log(nums)
nums.shift()
console.log(nums)

// 5
// Both pop() and shift() return the removed element and also modify the original array.
// - pop() — Removes and returns the last element.
// - shift() — Removes and returns the first element.
let arr = [10, 20, 30];
let a = arr.pop();
console.log(a);   
console.log(arr); 
let b = arr.shift();
console.log(b);  
console.log(arr); 


// # 9. Searching in Arrays
// 1
// indexOf() returns the index (position) of the first occurrence of the searched value in the array. Array indices start from 0.

// 2
// Value not found → returns -1.

// 3
const names = ["Jenil", "Mahir", "Arjun"];
console.log(names.indexOf("Mahir"));
// 1

// 4
const names4 = ["Jenil", "Mahir", "Arjun"];
console.log(names4.indexOf("Krishna"));
// -1

// 5
let students = ["Priyesha"]
console.log(students.indexOf("Priyesha"))


// # 10. Array with Different Data Types
// 1
// A JavaScript array can store values of different data types in the same array.

// 2
const data = [100, "Hello", true, null];

// 3
let arr = [10, "Hello", true, null];
for (let value of arr) {
    console.log(typeof value);
}

// 4
const data4 = [100, "Hello", true, null];
console.log(typeof data4[0])

// 5
const data5 = [100, "Hello", true, null];
console.log(typeof data5[2])


// # 11. Array of Arrays (Matrix) – 2D Arrays
// 1
// A 2D array (two-dimensional array) is commonly used to store data in rows and columns, like a table, a matrix, or a grid.

// 2
const matrix2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix2[2][1]); // 6

// 3
let matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix3[1][2]); // 6

// 4
const matrix4 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(matrix4[matrix4.length-1][matrix4[0].length-1]);

// 5
const matrix = [
    [10, 20, 30],
    [40, 50, 60],
];
matrix[1][1]=100
console.log(matrix)