//1
let name = "Rahul";
console.log(typeof(name))

//2
let age = 25;
console.log(typeof(age))

//3
let isStudent = true;
console.log(typeof(isStudent))

//4
console.log(typeof(city))

//5
console.log(typeof(null))

//6
console.log(typeof 42); //number
console.log(typeof "Hello"); //string
console.log(typeof true); //Boolean
console.log(typeof undefined);  //undefined

//7
console.log(typeof null);  //Object
console.log(typeof {});    //Object
console.log(typeof []);    //Object

//8
console.log(typeof NaN);   // Number
console.log(typeof Infinity); //Number
console.log(typeof function(){});   //function

//9
let price = 99.99
let message = "Welcome"
let isActive = false
console.log(typeof(price)) //Number
console.log(typeof(message)) //String
console.log(typeof(isActive)) //Boolean

//10
let value = null;
console.log(typeof value);
console.log(typeof value === "object");  //Object  true

//11
console.log(typeof typeof 100);   //String
console.log(typeof typeof "Hi");  //String
console.log(typeof typeof true);   //String

//12
let a = 10;
let b = "10";
console.log(typeof a === typeof b);  //false
console.log(typeof a == typeof b);   //false

//13
console.log(typeof null === "object"); // true
console.log(typeof [] === "object");   // true
console.log(typeof {} === "object");   // true

//14
let x;
console.log(typeof x);   //undefined
x = null;
console.log(typeof x);   //Object
x = 0;
console.log(typeof x);   //number

//15
console.log(typeof NaN === "number");     // true
console.log(typeof Infinity === "number");// true
console.log(typeof (1 / 0));            //   number
 