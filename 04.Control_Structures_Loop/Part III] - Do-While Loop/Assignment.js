//1
i=10;
do{
    console.log(i);
    i--
}while(i>0);

//2
i=1;
do{
    if (i%2==0){
        console.log(i)
    }i++
}while(i<=20);

//3
let n = 5;
let sum = 0;
do{
    sum+=n;
    n--
}while(n>0);
console.log(sum)

//4
let num4 = 234;
let product = 1;
do{
    let digit = num4%10;
    product*=digit
    num4=Math.floor(num4/10)
}while(num4>0)
console.log(product)

//5
let num5 = 58372;
let fn5 = 0;
do{
    let digit = num5%10;
    fn5=digit
    num5=Math.floor(num5/10)
}while(num5>0)
console.log(fn5)

//6
let Base = 3;
let Exponent = 4;
let power = 1;
do{
    power*=Base
    Exponent--
}while(Exponent>0);
console.log(power)

//7
let i8 = 1;
do{
    if (i8%4==0 && i8%8!=0){
        console.log(i8)
    }
    i8++
}while(i8<=100);

//8
let num8 = 1221;
let onum8 = num8;
let rnum8 = 0;
do{
    let digit = num8%10;
    rnum8=rnum8*10+digit
    num8=Math.floor(num8/10)
}while (num8>0);
if (onum8==rnum8){
    console.log("Palindrome number")
}else{
    console.log("not Palindrome number")
}

//9
let num1 = 48;
let num2 = 18;
let limit = 0;
let gcd = 0;
if (num1>num2){
    limit=num2
}else{
    limit=num1
}
do{
    if (num1%limit==0 && num2%limit==0){
        gcd=limit
        console.log(gcd)
        break
    }
    limit--
}while(gcd<=limit)

//10
let num = 13;
let binary = "";
do {
    let remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
}while (num > 0);
console.log(binary);