// // Assignment : Arrays in JavaScript
// // # 1. What Is an Array?
// // 1
// // An array is an ordered collection of values. Each value has a unique index (position).
// // An array is a special JavaScript data structure used to store a list of values.
// // Arrays are used everywhere: storing student names, marks, items in a cart, search results, etc.

// // 2
// // In JavaScript, the index is the position of an element inside an array. Array indexing starts at 0, not 1.

// // 3
// // Array indexing starts at 0, not 1.

// // 4
// var numbers = [10, 20, 30, 40];
// // Output==>30

// // 5
// var numbers = [10, 20, 30, 40];
// // for number 40 index value is 3.


// // # 2. Creating Arrays
// // 1
// // Using square brackets (recommended)
// var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
// // Using the Array constructor (less common)
// var marks = new Array(85, 90, 78);

// // 2
// // Using square brackets (recommended)
// var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// // 3
// var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// // 4
// var marks = new Array(85,90,78)

// // 5
// // The keyword is new.


// // # 3. Accessing Values in an Array
// // 1
// // Index — use the array index inside square brackets [] to access a specific value.

// // 2
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[0]);
// // Output==>Jenil

// // 3
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[2]);
// // Output==>Priyesha

// // 4
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[10]);
// // Output==>undefined

// // 5
// console.log(colors[0]);
// // Output==>ReferenceError: colors is not defined


// // # 4. Updating Values
// // 1
// // You can update a specific value in an existing JavaScript array by using its index and the assignment operator (=).
// // Use arrayName[index] = newValue;
// let colors = ["Red", "Blue", "Green"];
// colors[1] = "Yellow";
// console.log(colors); 

// // 2
// var marks = [80, 75, 90];
// marks[1] = 95;
// console.log(marks)

// // 3
// // Output==>[ 80, 95, 90 ]

// // 4
// // False, update an array element directly using its index and the assignment operator (=). No special update() method is required.

// // 5
// // Yes. In JavaScript, assigning a value to an index outside the array's current bounds increases the array's length. Any skipped positions become empty slots.
// // JavaScript allows it, increases the array's length, and leaves empty slots between the existing elements and the new value.
// let colors5 = ["Red", "Blue"];
// colors5[5] = "Green";
// console.log(colors5);     
// console.log(colors5.length);


// // # 5. Array Length
// // 1
// // .length

// // 2
// var arr = [1, 2, 3, 4];
// console.log(arr.length);
// // Output==>4

// // 3
// // Output==>0

// // 4
// // The length property is useful because it tells you how many elements an array contains. 
// // It is especially helpful for looping through arrays and checking their size.

// // 5
// // no need parentheses in length is a property


// // # 6. Looping Through Arrays
// // 1
// // two types for loop and while loop.

// // 2
// // i < array.length

// // 3
// // The increment step (i++) is placed after the array access statement inside the while loop.

// // 4
// var students = ["Jenil", "Mahir", "Krishna", "Yashvi"];
// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// // 5
// // The loop runs one extra time and tries to access an index outside the array's bounds, resulting in undefined.

// // 6
// let students = ["Jenil", "Mahir", "Krishna", "Yashvi"];
// for (let student of students){
//     console.log(student)
// }

// // 7
// // The main advantage of a for...of loop is that it directly gives you the values of an iterable without needing to manage indices manually. 
// // This makes the code simpler, cleaner, and easier to read.

// // 8
// const colors1 = ["Red", "Blue", "Green"];
// for (const color of colors1) {
//     console.log(colors1.indexOf(color))
// } // give ReferenceError: indexOf is not defined at object.<anonymous>


// // # 7. Adding Elements to Arrays
// // 1
// // push() method → Add at the end

// // 2
// // unshift() method → Add at the beginning

// // 3
// let nums3 = [1, 2, 3];
// nums3.push(4)
// console.log(nums3)

// // 4
// let nums4 = [1, 2, 3];
// nums4.push(4)
// console.log(nums4)
// nums4.unshift(0)
// console.log(nums4)

// // 5
// true


// // # 8. Removing Elements
// // 1
// // pop() method → Remove last Element of Array

// // 2
// // shift() → Remove first Element of Array

// // 3
// let nums83 = [100, 200, 300, 400, 500];
// nums83.pop()
// console.log(nums83)

// // 4
// let nums = [100, 200, 300, 400, 500];
// nums.pop()
// console.log(nums)
// nums.shift()
// console.log(nums)

// // 5
// // Both pop() and shift() return the removed element and also modify the original array.
// // - pop() — Removes and returns the last element.
// // - shift() — Removes and returns the first element.
// let arr = [10, 20, 30];
// let a = arr.pop();
// console.log(a);   
// console.log(arr); 
// let b = arr.shift();
// console.log(b);  
// console.log(arr); 


// // # 9. Searching in Arrays
// // 1
// // indexOf() returns the index (position) of the first occurrence of the searched value in the array. Array indices start from 0.

// // 2
// // Value not found → returns -1.

// // 3
// const names = ["Jenil", "Mahir", "Arjun"];
// console.log(names.indexOf("Mahir"));
// // 1

// // 4
// const names4 = ["Jenil", "Mahir", "Arjun"];
// console.log(names4.indexOf("Krishna"));
// // -1

// // 5
// let students = ["Priyesha"]
// console.log(students.indexOf("Priyesha"))


// // # 10. Array with Different Data Types
// // 1
// // A JavaScript array can store values of different data types in the same array.

// // 2
// const data = [100, "Hello", true, null];

// // 3
// let arr = [10, "Hello", true, null];
// for (let value of arr) {
//     console.log(typeof value);
// }

// // 4
// const data4 = [100, "Hello", true, null];
// console.log(typeof data4[0])

// // 5
// const data5 = [100, "Hello", true, null];
// console.log(typeof data5[2])


// // # 11. Array of Arrays (Matrix) – 2D Arrays
// // 1
// // A 2D array (two-dimensional array) is commonly used to store data in rows and columns, like a table, a matrix, or a grid.

// // 2
// const matrix2 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// console.log(matrix2[2][1]); // 6

// // 3
// let matrix3 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix3[1][2]); // 6

// // 4
// const matrix4 = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// console.log(matrix4[matrix4.length-1][matrix4[0].length-1]);

// // 5
// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
// ];
// matrix[1][1]=100
// console.log(matrix)

// // 6
// let mat = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]
// ];
// for(let i of mat){
//     console.log(i[1])
// }

// // 7
// const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];
// for(let i=0;i<marks.length-1;i++){
//     console.log(marks[2][i])
// }

// // 8
// let matrix8 = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ];
// console.log(matrix8.length*matrix8[0].length)

// // 9
// let matrix9 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// matrix9[1][1] = 0;
// for (let row of matrix9) {
//     console.log(row);
// }

// // 10
// let matrix10 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix10[0][2]);


// // # 12. Real-World Example
// const marks = [
//     [85, 90, 92], // Jenil
//     [70, 75, 80], // Arjun
//     [88, 82, 89]  // Krishna
// ];

// for (let i = 0; i < marks.length; i++) {
//     const studentMarks = marks[i];
//     const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
//     const avg = total / 3;
//     console.log("Student " + (i + 1) + " average: " + avg);
// }
// // 1 marks[i] represents the complete array of marks for one student.
// // 2 marks.length tells us how many students are present in the array.Use marks.length to make your code dynamic and reusable
// // 3 - studentMarks[0] = 70 studentMarks[1] = 75 studentMarks[2] = undefined, because the third mark doesn't exist.
// // In JavaScript, adding a number to undefined produces NaN (Not a Number). Therefore, Arjun's average will also be NaN.

// // 13
// // 1
// const arr13 = [10, 20, 30];
// console.log(arr13[3]); //undefined
// // 2
// // arr[arr.length] = 10; // Actually, this code is not wrong. It adds 10 to the end of the array.
// // 3
// let arr = [10, 20, 30];
// arr[arr.length] = 40;// Note that 40 is added after 30; it does not replace 30.
// // 4
// // A sparse array is an array that has one or more empty slots between its elements or at the end. 
// // These slots are not the same as elements containing undefined
// let arr134 = [10, 20, 30];
// arr134[5] = 60;
// console.log(arr134);
// console.log(arr134.length);
// // 5
// false
// // 6
// // Array: Ordered collection accessed using indexes.
// // Object: Collection of key-value pairs accessed using property names or keys.


// // # 14. Practice Exercises
// // 1
// const numbers = [12, 7, 18, 25, 4, 9, 30];
// for(const i of numbers){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// // 2
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
// for(let i=cities.length-1;i>=0;i--){
//     console.log(cities[i])
// }

// // 3
// const scores = [12, 45, 7, 89, 23];
// let largnum = -Infinity;
// let secondlarg = 0;
// for(let i of scores){
//     if(i>largnum){
//         largnum=i
//     }
// }
// for(let j of scores){
//     if (largnum>j && secondlarg<j){
//         secondlarg=j
//     }
// }
// console.log(secondlarg)

// // 4
// const colors = ["Red", "Blue", "Green", "Yellow"];
// colors.push("Purple")
// colors.unshift("Black")
// console.log(colors)

// // 5
// const matrix145 = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];
// let total=0;
// for(let i of matrix145){
//     for(let j of i){
//         total+=j
//     }
// }
// console.log(total)

// // 6
// const marks146 = [45, 67, 89, 32, 76, 91, 54];
// let count6 = 0;
// for(let i of marks146){
//     if(i>50){
//         count6+=1
//     }
// }
// console.log(count6)

// // 7
// const matrix147 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for(let i=0;i<=matrix147.length-1;i++){
//     for(let j=0;j<=matrix147[0].length-1;j++){
//         if(i==j){
//             console.log(matrix147[i][j])
//         }
//     }
// }


// # 15. Multiple Choice Questions
// 1 d
// 2 c
// 3 c
// 4 c
// 5 b
// 6 d
// 7 b