//Q1
for (let i=50;i>0;i--){
    if (i%3==0 && i%9!=0){
        console.log(i)
    }
}

//Q2
let arr=[12, 45, 7, 23, 56, 89, 34];
let largest=(arr.length-1);
for (let i=arr.length-1;i>=0;i--){
    if (arr[i]>largest){
        largest=arr[i]
    }
}
console.log(largest)


//Q3
let num=Number(prompt("enter an number:-"))
let product=1
for (let i=num;i>0;i--){
    let digit=num%10
    num=Math.floor(num/10)
    // console.log(digit)
    if (digit%2!==0){
        product=product*digit
    }
}
console.log(product)


//Q4
let string = "JavaScript";
let rstring = "";
for(let i=string.length-1;i>=0;i--){
    if (string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" || string[i]=="A" || string[i]=="E" || string[i]=="I" || string[i]=="O" || string[i]=="U"){
        rstring+=""
    }else{
        rstring+=string[i]
    }
}
console.log(rstring)


//Q5
let bag1=[0,1, ];
let rbag=[];
let first=0;
let second1=1;
for (let i=1;i<=20;i++){
    let third=first+second1;
    bag1=bag1+" ,"+third
    first=second1;
    second1=third;
}
for (let i=bag1.length-1;i>=0;i--){
    rbag=rbag+bag1[i]
}
console.log(bag1)
console.log(rbag)


//Q6
let num3=Number(prompt("Eneter an number:-"))
let onum3=num3;
let rnum1=0
for (let i=String(num3).length-1; i>=0;i--){
    let digit=num3%10;
    rnum1=(rnum1*10)+digit
    num3=Math.floor(num3/10)

}
console.log(rnum1)
if (onum3==rnum1){
    console.log("Palindeome numebr")
}else{
    console.log("not an palindrome number:")
}


//Q7
let arr4=[32, 28, 41, 19, 35, 27, 38];
let count1=0
for (let i=arr4.length-1;i>=0;i--){
    if (arr4[i]<30){
        count1+=1
    }

}
console.log(count1)



//Q8
let n = 13;
let binary = "";

for (; n > 0; n = Math.floor(n / 2)) {
    binary = (n % 2) + binary;
}
console.log(binary);


//Q9
let arr3=[90, 85, 70, 95, 60, 88, 75];
for (let i=arr3.length-1;i>=0;i--){
    if (arr3[i]>80){
        console.log(arr3[i])
        break;
    }
}

//Q10
for (let i=40;i>0;i--){
    if (Math.sqrt(i) % 1 === 0){
        continue
    }
    console.log(i)
}