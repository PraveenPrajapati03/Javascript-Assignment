// 5. Greater Than >
//1
let age=20;
let minimumAge=18;
let canVote=age>minimumAge;
console.log(`can user vote ${canVote}`)                  

//2
let totalPice=650;
let freeShipingLimit=500;
let isShipingFree=freeShipingLimit>totalPice
console.log(`Is shiping is apply ${isShipingFree}`)               

//3
let playerScore=1200;
let requiredScore=1000;
let isLevelUnloked=playerScore>requiredScore;
console.log(`is the player level unloked ${isLevelUnloked}`)              

//4
let monthlyIncome=40000;
let minimumRequired=3000;
let isApproved=monthlyIncome>minimumRequired;
console.log(`is lone is approved to person ${isApproved}`)

//5
let stepsToday=11000;
let targetSteps=10000;
let targetExceeded=stepsToday>targetSteps;
console.log(`is the today target reached ${targetExceeded}`)                   

//6
let a = 5;
let b = 5;
console.log(a > b);//false

//7
let x = "10";
let y = "2";
console.log(x > y); //false

//8
let p = "5";
let q = 10;
console.log(p > q);//false

//9
let m = null;
let n = 0;
console.log(m > n);//false

//10
let val = undefined;
console.log(val > 0);//false