//3. Strict Equality ===
//1
let password=1234;
let enterdPass="1234";
console.log(password===enterdPass)

//2
let acountNo1=1234567890;
let account2=1234567890;
console.log(acountNo1===account2)

//3
let flag=true;
let requiredStat=1;
console.log(flag===requiredStat)

//4
let databaseValue=null;
let cashedValue=undefined;
console.log(databaseValue===cashedValue)

//5
let score1=85;
let score2=85;
console.log(score1===score2)

//6
let a = 0;
let b = false;
console.log(a === b);//false

//7
let x = "";
let y = false;
console.log(x === y);//false

//8
let p = "0";
let q = 0;
console.log(p === q);//false

//9
let m = null;
let n = undefined;
console.log(m === n);//false

//10
let val = NaN;
console.log(val === val);//false