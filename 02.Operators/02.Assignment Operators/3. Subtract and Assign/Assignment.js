//3. Subtract and Assign -=
//1
let tankWater=1000;
tankWater-=375;
console.log(`the remaining water in tank after use ${tankWater} lt`)

//2
let balance=500;
balance-=180;
console.log(`the money remaining after spend is ${balance}`)

//3
let phoneBattery=90;
let useBattery=45;
phoneBattery-=useBattery;
console.log(`The remaining battery after use is ${phoneBattery}`)

//4
let totalBoxes=2400;
let sendBoxe=950;
totalBoxes-=sendBoxe;
console.log(`the boxes remaining after send out box is ${totalBoxes}`)

//5
let totalPoint=2000;
let losePoint=625;
totalPoint-=losePoint;
console.log(`the remaining point after losing the point is ${totalPoint}`)

//6
let a = "20";
a -= 5;
console.log(a);//15

//7
let x = "100";
x -= "50";
console.log(x);//50

//8
let p = 10;
p -= "abc";
console.log(p);//NaN

//9
let m = 5;
m -= true;
console.log(m);//4

//10
let val = 20;
val -= false;
console.log(val);//20