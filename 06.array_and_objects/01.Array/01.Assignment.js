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
let colors = ["Red", "Blue"];
colors[5] = "Green";
console.log(colors);     
console.log(colors.length);


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