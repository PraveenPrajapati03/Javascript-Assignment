//1
let num = 1;
for (let i=1;i<=4;i++){
    let row1 = "";
    for (let j=1;j<=i;j++){
        row1+=num+" "
        num+=1
    }
    console.log(row1)
}

//2
for (let i=1;i<=5;i++){
    let row2 = "";
    for (let j=1;j<=i;j++){
        row2+=String.fromCharCode(64+j)+" "
    }
    console.log(row2)
}

//3
for (let i=1;i<=5;i++) {
    let row3 = "";
    for (let j=1;j<=i;j++) {
        if (i==5 || j==1 || j==i){
            row3+="* ";
        }else {
            row3+="  ";
        }
    }
    console.log(row3);
}

//4
for (let i=1;i<=5;i++){
    let row4 = "";
    for (let j=5;j>=i;j--){
        row4+="*"
    }
    console.log(row4)
}

//5
for (let i=1;i<=5;i++){
    let row5 = "";
    for (let j=5;j>=i;j--){
        row5+=6-i+" "
    }
    console.log(row5)
}

//6
for (let i=1;i<=5;i++){
    let row6 = "";
    for (let j=5;j>=i;j--){
        row6+=i-j+5+" "
    }
    console.log(row6)
}

//7
let num7 = 15;
for (let i=1;i<=5;i++){
    let row7 = "";
    for (let j=5;j>=i;j--){
        row7+=num7+" "
        num7-=1
    }
    console.log(row7)
}

//8
for (let i=1;i<=5;i++) {
    let row8 = "";
    for (let j=5;j>=i;j--) {
        if (i==1 || j==5 || j==i){
            row8+="* ";
        }else {
            row8+="  ";
        }
    }
    console.log(row8);
}