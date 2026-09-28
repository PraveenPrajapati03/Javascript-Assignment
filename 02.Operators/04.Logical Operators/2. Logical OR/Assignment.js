//2. Logical OR ||
//1
let passwordCorrect = true
let otpValid = false
console.log(passwordCorrect||otpValid)

//2
let isMember = false
let hasCoupon = true
console.log(isMember||hasCoupon)

//3
let emailGiven = true
let phoneGiven = false
console.log(emailGiven||phoneGiven);

//4
let age = 16;
let height = 155;
console.log(age||height)

//5
let score = 900;
let timeBonus = true;
console.log(score||timeBonus)

//6
 let a = 0;
 let b = false;
 let c = "";
 let d = null;
 let e = 42;
 let result1 = a || b || c || d || e;
 console.log(result1); //42

//7
 let i = "Hello" || 0;
 let y = 0 || "Hi";
 console.log(i, y); //Hello Hi

//8
 let p = 10;
 let q = 20;
 let result2 = (p < 5) || (q > 15);
 console.log(result2); //true

//9
 let val = 5;
 let condition = val || (val = 0);
 console.log(condition);
 console.log(val); //5

//10
 let x = "" || 0 || false || null || undefined || "OK";
 console.log(x); //ok
