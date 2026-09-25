// 6. Modulus and Assign %=
//1
let totalCandies=137;
let eachBox=10;
totalCandies%=eachBox;
console.log(`the candies remaining after the each box fill  is ${totalCandies}`)

//2
let totalStudent=250;
let groupOf=7;
totalStudent%=groupOf;
console.log(`the student remaining from the group is ${totalStudent}`)

//3
let projectRun=1000;
let weekDay=7;
projectRun%=weekDay;
console.log(`days lest after full use of week is ${projectRun}`)

//4
let totalChair=89;
let rows=5;
totalChair%=rows;
console.log(`The chair left after all in the row is ${totalChair}`)

//5
let totalMonths=365;
let months=12;
totalMonths%=months;
console.log(`The month remaining after the all month pay to years ${totalMonths}`)

//6
let a = 10;
a %= 0;
console.log(a);//NaN

//7
let x = 0;
x %= 5;
console.log(x);//0

//8
let p = -10;
p %= 3;
console.log(p);//-1

//9
let m = 10;
m %= -3;
console.log(m);//1

//10
let val = -10;
val %= -3;
console.log(val);//-1