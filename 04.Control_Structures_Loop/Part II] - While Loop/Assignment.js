//1
let i1 = 1;
while (i1<=10){
    console.log(i1)
    i1++
}

//2
let i2 = 1;
let sum2 = 0;
while (i2<=10){
    sum2+=i2
    i2++
}
console.log(sum2)

//3
let num3 = 5;
let i3 = 1;
let table3 = "";
while (i3<=10){
    table3+=`${num3} X ${i3} = ${num3*i3}`+" "
    i3++
}
console.log(table3)

//4
let num4 =  58372 ;
let count = 0;
while (num4>0){
    let digit = num4%10;
    count++
    num4=Math.floor(num4/10)
}
console.log(count)

//5
let num5 =  12345 ;
let rnum5 = 0;
while (num5>0){
    let digit = num5%10;
    rnum5=rnum5*10+digit
    num5=Math.floor(num5/10)
}
console.log(rnum5)

//6
let num6 =  4729;
let sum6 = 0;
while (num6>0){
    let digit = num6%10;
    sum6+=digit
    num6=Math.floor(num6/10)
}
console.log(sum6)

//7
let i7 = 1;
while (i7<=100){
    if (i7%3==0 && i7%5==0 && i7%7!=0){
        console.log(i7)
    }
    i7++
}

//8
let num8 = 5;
let fac = 1;
while (num8>0){
    fac*=num8
    num8--
}
console.log(fac)

//9
let num9 = 121;
let onum9 = num9;
let rnum9 = 0;
while (num9>0){
    let digit = num9%10;
    rnum9=rnum9*10+digit
    num9=Math.floor(num9/10)
}
if (onum9==rnum9){
    console.log("Palindrome number")
}else{
    console.log("not Palindrome number")
}

//10
let num10 = 13;
let binary = "";
while (num10 > 0) {
    let remainder = num10 % 2;
    binary = remainder + binary;
    num10 = Math.floor(num10 / 2);
}
console.log(binary);