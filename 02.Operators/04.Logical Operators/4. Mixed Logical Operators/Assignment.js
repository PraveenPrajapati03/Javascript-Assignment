//4. Mixed Logical Operators (&&, ||, !)
//1
 let isMember = true;
 let isBanned1 = false;
 let canEnter = isMember && !isBanned1;
 console.log(canEnter);

//2
 let isStudent = true;
 let issenior=false;
 let isBanned = true;
 let result1=(isStudent || issenior) && !isBanned;
 console.log(result1)  

//3
 let nameGiven = true;
 let emailGiven = false;
 let phoneGiven = true;
 let result2=(nameGiven)&&(emailGiven||phoneGiven);
 console.log(result2)

//4
 let isAdmin = true;
 let hasToken = false;
 let isSuspended = false;
 let result3=(isAdmin||hasToken)&&isSuspended;
 console.log(result3)

//5
 let score=1200;
 let timebonus=false;
 let extralife=true;
 let result4=score>1000&&(timebonus||extralife)
 console.log(result4)

//6
 let a = 0;
 let b = 10;
 let c = 20;
 let result5 = a || b && c;
 console.log(result5); // 20

//7
 let p = true;
 let q = false;
 let r = true;
 let result6 = p && q || r;
 console.log(result6);  //true


//8
 let x = 10;
 let y = 20;
 let result7 = !(x && y) || (x > 5 && y < 30) && true;
 console.log(result7);  //true

//9
 let m = 5;
 let n = 0;
 let o = 10;
 let result8 = m && n || o;
 console.log(result8);  // 10

//10
 let val1 = false;
 let val2 = true;
 let val3 = false;
 let result9 = !(val1 || val2) && val3 || true;
 console.log(result9);   //true