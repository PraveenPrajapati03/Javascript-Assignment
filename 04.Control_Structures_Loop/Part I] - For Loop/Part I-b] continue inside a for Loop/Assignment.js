//1
for (let i=1;i<=30;i++){
    if (i%4===0){
        continue
    }
    console.log(i)
}

//2
let arr=[10,20,-10,-24,42,42];
let total=0;
for (let i=0;i<arr.length;i++){
    if (arr[i]<0){
        continue
    }
    total=total+arr[i]
}
console.log(total)

//3
let str="HELLO WORLD"
for (let i=0;i<str.length;i++){
    if (str[i]==" "){
        continue
    }
    console.log(str[i])
}

//4
let num2=6;
for (let i=1;i<=12;i++){
    if ((num2*i)%5==0){
        continue
    }
    console.log(`${num2}X ${i}= ${num2*i}`)
}

//5
let age=[12, 18, 25, 15, 30, 17, 22];
for (let i=0;i<age.length;i++){
    if (age[i]<18){
        continue
    }
    console.log(age[i])
}