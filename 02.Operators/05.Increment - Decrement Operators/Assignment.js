//Increment / Decrement Operators (++ / --)
//Part a:
//1
let start=5;
start++;
console.log(start)

//2
let start2=5;
start2--;
console.log(start2)

//3
let score = 10;
score++;
console.log(score)

//4
let items = 8;
items--;
console.log(items)

//5
let count = 0;
count++;
count++;
console.log(count)

//Part b:
//6
let x=5;
let y=x++;
console.log(x,y)  

//7
let a=5;
let b=++a;
console.log(a,b)  


//8
let lives = 3;
let previousLives=lives--;
console.log(lives,previousLives)

//9
let attempts = 0;
let currentAttempts=++attempts;
console.log(currentAttempts)

//10
let points = 100;
points++;
points--;
console.log(points)

//Part c:
//11
let p = 10;
let q = p++;
let r = ++p;
console.log(p, q, r);  //12  10  12

//12
let a1 = 5;
let b1 = a1-- + ++a1;
console.log(a1, b1);  //5,10

//13
let m = 7;
let n = --m + m++;
console.log(m, n);  //7 12

//14
let p1 = 3;
let q1 = p1++ + ++p1 + p1;
console.log(p1, q1); //5  13

//15
let val = 0;
val = val++ + ++val;
console.log(val);  //2