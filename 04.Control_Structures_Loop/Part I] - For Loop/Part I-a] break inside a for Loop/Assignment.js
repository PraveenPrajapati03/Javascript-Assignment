//1
let arr=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
for (let i=0;i<arr.length;i++){
    if (arr[i]===7){
        console.log(i)
        break
    }
}

//2
for (let i=1;i<=6;i++){
    password=prompt("enter the password:-")
    if (password=="asd"){
        console.log("Access garnted")
        break
    }else{
        console.log("enter aganin ")
    }
    if(i==6){
        console.log("Account locked")
    }
}

//3
let sum=0;
for (let i=1;i<=Infinity;i++){
    sum+=i
    if (sum>=100){
        console.log(i)
        break

    }

}

//4
let arr1=["praveen","kumar","Sun","sunday"];
for (let i=0;i<arr1.length;i++){
    if (arr1[i].startsWith("S")){
        console.log(arr1[i])
        break
    }
}

//5
for (let i = 1; i <= 50; i++) {
    console.log(i);
    if (i > 20 && Math.sqrt(i) % 1 === 0) {
        break;
    }
}