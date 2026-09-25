// 5. Modulus %
// 1
let totalStudents=53;
let groups=5;
let leftStudents=totalStudents%groups;
console.log(`The remaining students are ${leftStudents}`)

// 2
let totalCandies=128;
let packOf=10;
let leftCandies=totalCandies%packOf;
console.log(`The remianing candies after packing is ${leftCandies}`)

// 3
let num=7;
if (num%2===0){
    console.log("The number is Even")
}else{
    console.log("The numnber is Odd")
}

// 4
let totalToys=237;
let packOfToys=6;
let leftToys=totalToys%packOfToys;
console.log(`The toys remaining after packing is ${leftToys}`)

// 5
let totalPassengers=185;
let eachBus=40;
let leftPassengers=totalPassengers%eachBus;
console.log(`The people are left after filling in many buses ${leftPassengers}`)

//6
let a = 10;
let b = 0;
let result1 = a % b;
console.log(result1);//NaN

//7
let x = 0;
let y = 5;
let result2 = x % y;
console.log(result2);//0

//8
let p = -10;
let q = 3;
let result3 = p % q;
console.log(result3);//-1

//9
let m = 10;
let n = -3;
let result4 = m % n;
console.log(result4);//1

//10
let val1 = -10;
let val2 = -3;
let val3 = val1% val2;
console.log(val3);//-1