//8. Less Than or Equal <=
//1
let peopleLift=7;
let maxcapacity=8;
let isSafe=peopleLift<=maxcapacity;
console.log("is safe to lift ",isSafe) 

//2
let fileSize=5;
let maxAllowe=5;
let uploadAllowed=fileSize<=maxAllowe;
console.log("is file upload allowed",uploadAllowed)   

//3
let participantAge=12;
let maxJuniorAge=12;
let canQualify=participantAge<=maxJuniorAge;
console.log("is can apply to qualify as junior",canQualify) 

//4
let dataUse=9.5;
let dataLimit=10;
let withinLimit=dataUse<=dataLimit;
console.log("is data use in limit",withinLimit)           

//5
let classStrength=40;
let maxStrength=40;
let validCapacity=classStrength<=maxStrength;
console.log("is class at valid capacity",validCapacity)       

//6
let a = 5;
let b = 5;
console.log(a <= b);//true

//7
let x = null;
let y = 0;
console.log(x <= y);//true

//8
let p = undefined;
let q = 0;
console.log(p <= q);//false

//9
let m = "5";
let n = 5;
console.log(m <= n);// true

//10
let val = "3";
let limit = 5;
console.log(val <= limit);//true