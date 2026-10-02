//1
let num = 14;
console.log(num%7==0?"Divisible by 7":"Not divisible by 7")

//2
let temp = 34;
console.log(temp>=30?"Hot day":"Pleasant day")

//3
let str = "praveen";
console.log(str==""?"empty string":"string has data")

//4
let age = 17;
console.log(age<13?"Child":age>=13&&age<=19?"Teenager":"Adult")

//5
let a = 5;
let b = 7;
let c = 6;
console.log(a>b && a>c?"A is greater":b>a && b>c?"B is greater":c>a &&c>b?"C is greater":"all are equal")

//6
let marks = 100;
console.log(marks>=75?"Distinction":marks>=60 && marks<=74?"First class":marks>=50 && marks<=59?"Second Class":marks>=35 && marks<=49?"Pass":"fail")

//7
let num1 = 3;
console.log(num1>0 && num1%2==0?"Positive even":num1>0 && num1%2!=0?"Positive odd":num1<0 && num1%2==0?"Negative even":num1<0 && num1%2!=0?"Negative odd":"zero")

//8
let year = 2026;
console.log(year%4==0 &&(year%100!=0 || year%400==0)?"Leap year":"Not an leap year")

//9
let role = "user";
let action = "view";
let work = role=="admin" ?  action=="delete" ? "Admin Delete":action=="edit" ? "Admin Edit": "Admin Other":role=="user"? action=="view"?"User View":"User Restricted": "Invalid Role";
console.log(work)

//10
let price = 5000;
let finalPrice = 0;
let getDiscount= (price>=5000)? "20% discount":(price>=2000)? "10% discount":(price>=1000)?"5% discount":"0% discount";
finalPrice=price>=5000 ? price-price*0.2:price>=2000 ? price-price*0.1:price>=1000 ? price-price*0.05:price;
console.log(`You get ${getDiscount} and final payble amount is ${finalPrice}`)