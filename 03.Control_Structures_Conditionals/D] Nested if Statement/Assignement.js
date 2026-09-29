//1
let num1 = 12;
if (num1>10){
    if(num1%3==0){
        console.log("numner is greater tha 10 and divisible by 3")
    }
}

//2
let age = 18;
let voterId = true;
if (age>=18){
    if (voterId==true){
        console.log("can vote")
    }

}

//3
let scoreMarkas = 85;
if (scoreMarkas>=40){
    if (scoreMarkas>=80){
        console.log("Passed with distinction")
    }
}

//4
let pin = 1213;
let accountBalanc = 1213111;
if (pin==1213){
    if (accountBalance>0){
        console.log("can withdrawl")
    }
}

//5
let year = 2024;
if (year%4==0){
    if (year%100==0){
        console.log("leap year")
    }
}

//6


//7
let cartTotal = 1200;
let isPremium = "yes";
if (cartTotal >= 1000) {
    if (isPremium === "yes") {
        cartTotal = cartTotal - (cartTotal * 20 / 100);
    } else {
        cartTotal = cartTotal - (cartTotal * 10 / 100);
    }
}
console.log("Final Amount: ₹" + cartTotal);


//8
let number = 8;
if (number > 0) {
    if (number % 2 === 0) {
        if (number % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        }
    }
}


//9
let age1 = 25;
let hasDegree = "yes";
let experience = 5;

if (age1 >= 21 && age1 <= 30) {
    if (hasDegree === "yes") {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        }
    }
}


//10
let present = "yes";
let internalMarks = 50;
let externalMarks = 50;

if (present === "yes") {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        }
    }
}