//1
let month = 12;
if (month==1 || month==2|| month==12){
    console.log("winter")
} else if (month==3 || month==4 || month==5){
    console.log("summer")
} else if (month==6 || month==7 || month==8){
    console.log("Monsoon")
}else{
    console.log("Autumn")
}

//2
let income = 1000000;
if (income<300000){
    console.log("no text")
}else if (income>=300000 && income<700000){
    console.log("5% text")
}else if (income>=700000 && income<1000000){
    console.log("10% text")
} else{
    conasole.log("15% discount")
}

//3
let score = 95;
if (score>=90){
    console.log("outstanding")
} else if (score>=70 && score<=89){
    console.log("good")
} else if (score>=40 && score<=69){
    console.log("Average")
} else {
    console.log("Need inprovment")
}

//4
let speed = 65;
if (speed<40){
    console.log("slow")
} else if (speed>=40 && speed<=80){
    console.log("Normal")
} else{
    console.log("Fast")
}

//5
let personHeight = 173;
if (personHeight<150){
    console.log("Short")
} else if (personHeight>=150 &&personHeight<=170){
    console.log("Average")
} else{
    console.log("Tall")
}

//6
let day = 4;
if (day>=1 && day <=5){
    console.log("weekday")
} else {
    console.log("Weekend")
}

//7
let units = 250;
let bill;
if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}
console.log("Total Electricity Bill: ₹" + bill);

//8
let attendance = 85;
if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

//9
let mark1 = 45;
let mark2 = 56;
let mark3 = 89;

if (mark1 >= mark2 && mark1 >= mark3) {
    console.log("Highest Mark: " + mark1);
} else if (mark2 >= mark1 && mark2 >= mark3) {
    console.log("Highest Mark: " + mark2);
} else {
    console.log("Highest Mark: " + mark3);
}

//10
let number = 4;
if (number === 0) {
    console.log("Zero");
} else if (number > 0 && number % 2 === 0) {
    console.log("Positive Even");
} else if (number > 0 && number % 2 !== 0) {
    console.log("Positive Odd");
} else if (number < 0 && number % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}