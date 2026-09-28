//3. Logical NOT !
//1
 let isBanned = false;
 let canLogin = !isBanned;
 console.log(canLogin);

//2
 let isCompleted = false;
 let pending=!isCompleted;
 console.log(pending)

//3
 let isOn = true;
 let access=!isOn;
 console.log(access);

//4
 let isActive = false;
 let contect=!isActive;
 console.log(contect)

//5
 let isReadOnly = false;
 let edit=!isReadOnly;
 console.log(edit)

//6
 let a = 0;
 let b = 1;
 console.log(!a, !b);  //true false

//7
 let x = "Hello";
 let y = "";
 console.log(!x, !y);  //false true

//8
 let val = 5;
 let result1 = !val;
 console.log(result1);  //false

//9
 let p = 10;
 let q = 20;
 let result2 = !(p && q);
 console.log(result2);   // false

 10
 let m = 0;
 let n = 1;
 let result3 = !(m || n);
 console.log(result3);     //false