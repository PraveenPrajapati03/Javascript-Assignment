// //1
// let num = 1;
// for (let i=1;i<=4;i++){
//     let row1 = "";
//     for (let j=1;j<=i;j++){
//         row1+=num+" "
//         num+=1
//     }
//     console.log(row1)
// }

// //2
// for (let i=1;i<=5;i++){
//     let row2 = "";
//     for (let j=1;j<=i;j++){
//         row2+=String.fromCharCode(64+j)+" "
//     }
//     console.log(row2)
// }

// //3
// for (let i=1;i<=5;i++) {
//     let row3 = "";
//     for (let j=1;j<=i;j++) {
//         if (i==5 || j==1 || j==i){
//             row3+="* ";
//         }else {
//             row3+="  ";
//         }
//     }
//     console.log(row3);
// }

// //4
// for (let i=1;i<=5;i++){
//     let row4 = "";
//     for (let j=5;j>=i;j--){
//         row4+="*"
//     }
//     console.log(row4)
// }

// //5
// for (let i=1;i<=5;i++){
//     let row5 = "";
//     for (let j=5;j>=i;j--){
//         row5+=6-i+" "
//     }
//     console.log(row5)
// }

// //6
// for (let i=1;i<=5;i++){
//     let row6 = "";
//     for (let j=5;j>=i;j--){
//         row6+=i-j+5+" "
//     }
//     console.log(row6)
// }

// //7
// let num7 = 15;
// for (let i=1;i<=5;i++){
//     let row7 = "";
//     for (let j=5;j>=i;j--){
//         row7+=num7+" "
//         num7-=1
//     }
//     console.log(row7)
// }

// //8
// for (let i=1;i<=5;i++) {
//     let row8 = "";
//     for (let j=5;j>=i;j--) {
//         if (i==1 || j==5 || j==i){
//             row8+="* ";
//         }else {
//             row8+="  ";
//         }
//     }
//     console.log(row8);
// }

// //9
// for (let i=1;i<=5;i++) {
//     let row9 = "";
//     for (let j=1;j<=5;j++) {
//         if (j==i){
//             row9+="  ";
//         }else {
//             row9+="* ";
//         }
//     }
//     console.log(row9);
// }

// //10
// for (let i=1;i<=5;i++) {
//     let row10 = "";
//     for (let j=1;j<=10;j++){
//         if (i*j%2==0){
//             row10+=i*j+" ";
//         }else {
//             row10+="  ";
//         }
//     }
//     console.log(row10);
// }

//11


//13
// for (let i=1;i<=5;i++){
//     let row = "";
//     for (let j=4;j>=i;j--){
//         row+=" "
//     }
//     for (let k=1;k<=i;k++){
//         row+=k
//     }
//     for (let m=1;m<i;m++){
//         row+=i-m
//     }
//     console.log(row)
// }
// for (let i=1;i<=4;i++){
//     let row = "";
//     for (let j=1;j<=i;j++){
//         row+=" "
//     }
//     for (let k=1;k<=5-i;k++){
//         row+=k
//     }
//     for (let m=4;m>i;m--){
//         row+=m-i
//     }
//     console.log(row)
// }

//14
let mat = [
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30],
    [31,32,33,34,35,36]
]
let rows = mat.length;
let coloums = mat[0].length;
let top = 0;
let bottom = rows-1;
let left = 0;
let right = coloums-1;
let bag = ""
let elements=1;

while(elements<rows*coloums){
    for (let i=left;i<=right;i++){
        bag+=mat[top][i]+" "
        elements++
    }
    // console.log(bag)
    top++
    for (let i=top;i<=bottom;i++){
        bag+=mat[i][right]+" "
         elements++
    }
    right--
    // console.log(bag)
    for(let i=right;i>=left;i--){
        bag+=mat[bottom][i]+" "
         elements++
    }
    bottom--
    // console.log(bag)
    for (let i=bottom;i>=top;i--){
        bag+=mat[i][left]+" "
         elements++
    }
    left++
}
console.log(bag)