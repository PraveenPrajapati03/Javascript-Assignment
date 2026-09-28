// 1. Logical AND &&
//1
let usrname="admin";
let password=1234;
console.log(usrname && password);

//2
let isLoggedIn=true;
let hasPermission=true;
console.log(isLoggedIn&&hasPermission);

//3
let instock=true;
let price=800;
console.log(instock&&price)

//4
let marks=75;
let attendance=80;
console.log(marks>65&&attendance>70);

//5
isweeked=true;
isholiday=false;
console.log(isweeked&&isholiday);

//6
let a = 0;
let b = 10;
let result1 = a && b;
console.log(result1); //0

//7
let x = 5;
let y = 10;
let result2= (x > 3 && y) || 0;
console.log(result2); //10

//8
let p = "Hello";
let q = "";
let r = "World";
let result3 = p && q && r;
console.log(result3); //""

//9
let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val); //0,0 

10
let num1 = 10;
let num2 = 20;
let result4 = (num1 && num2) && (num1 > num2);
console.log(result4); //false