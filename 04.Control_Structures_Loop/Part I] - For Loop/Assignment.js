// //1
// let temp = [28, 32, 25, 40, 18, 35];
// let count = 0;
// for(let i=0;i<temp.length;i++){
//     if (temp[i]>30){
//         count+=1
//     }
// }
// console.log(count)

// //2
// let num = 4729;
// let sum = 0;
// num = String(num)
// for(let i=0;i<num.length;i++){
//     sum+=Number(num[i])
// }
// console.log(sum)

// //3
// for (let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0 && i%7!=0){
//         console.log(i)
//     }
// }

// //4
// let string = "JavaScript";
// let rstring = "";
// for(let i=0;i<string.length;i++){
//     if (string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" || string[i]=="A" || string[i]=="E" || string[i]=="I" || string[i]=="O" || string[i]=="U"){
//         rstring+=""
//     }else{
//         rstring+=string[i]
//     }
// }
// console.log(rstring)

// //5
// let arr = [10,20,30,40,50];
// let largestNumber = 0;
// let secondLargestNumber = 0;
// for(let i=0;i<arr.length;i++){
//     if (arr[i]>largestNumber){
//         largestNumber=arr[i]
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if (arr[i]<largestNumber){
//         secondLargestNumber=arr[i]
//     }
// }
// console.log(secondLargestNumber)

//6


// //7
// let bag = "";
// for (let i = 0;i<8;i++){
//     bag+=2**i+" "
// }
// console.log(bag)

// //8
// let firstNumber = 0;
// let secondNumber = 1;
// let fibonacciNumber = "";
// fibonacciNumber+=firstNumber+" "+secondNumber+" "
// for (let i=1;i<=18;i++){
//     let thirdNumber=firstNumber+secondNumber
//     fibonacciNumber+=thirdNumber+" "
//     firstNumber=secondNumber
//     secondNumber=thirdNumber
// }
// console.log(fibonacciNumber)

// //9
// let studentMarks = [45, 78, 90, 32, 56, 88];
// let total = 0;
// let count = 0;
// for(let i=0;i<studentMarks.length;i++){
//     total+=studentMarks[i]
// }
// for(let i=0;i<studentMarks.length;i++){
//     if (studentMarks[i]>total/6){
//         count+=1
//     }
// }
// console.log("Average marks :",total/6)
// console.log("The number of student get marks higher than average marks is :",count)

//10
