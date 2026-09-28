//Type Coercion
//Part a:
//1
let a="25";
console.log(Number(a))

//2
let number=100;
console.log(`${String(number)} "rupees".`)

//3
let value=0;
console.log(Boolean(value))

//4
let name="Hello";
console.log(Boolean(name))

//5
let sValue = "50";
let result = +sValue * 2
console.log(result)

//Part b:
//6
console.log("10" - 5); //5
console.log("10" + 5); //105
console.log("10" * 2); //20
console.log("10" / 2); //5

//7
console.log("5" - "2"); //3
console.log("5" + "2"); //52 
console.log("5" * "2"); //10
console.log("5" / "2"); //2.5

//8
console.log(Number("123")); //123
console.log(Number("123abc")); //NaN
console.log(Number(true));  //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)) //NaN;

//9
console.log(Boolean(0)); //false
console.log(Boolean(""));  //false
console.log(Boolean("0")); //true
console.log(Boolean([]));   //true
console.log(Boolean({}));   //true
console.log(Boolean(null));  //false

//10
console.log(String(100)); //100
console.log(String(true)); //true 
console.log(String(null)); //null 
console.log(String(undefined)); //undefined
console.log(100 + ""); //100

//Part c:
//11
console.log("5" + 3 + 2); //532
console.log(5 + 3 + "2"); //82
console.log("5" - 3 + 2); //4
console.log(5 - "3" + "2");//22

//12
console.log(true + true);//2
console.log(true + false); //1
console.log(true + "false"); //true false
console.log(false + "true"); //false true

//13
console.log(null + 5); //5
console.log(undefined + 5);// NaN
console.log(null + "5"); // null5
console.log(undefined + "5"); //undefined5

//14
console.log([] + []); //"" empty only 
console.log([] + {});//[Object Object]
console.log({} + []);//[Object Object] 
console.log({} + {});//[Object Object][Object Object]

//15
let i = "10";
let o = 5;
let c = i + o;
let d = i - o;
let e = +i + o;
console.log(c, typeof c); //105 String
console.log(d, typeof d);  //5 Number
console.log(e, typeof e);  //15 Number

//16
console.log(!!"Hello"); //true
console.log(!!""); //false
console.log(!!0);  //false
console.log(!!1);  //true
console.log(!!null);  //false
console.log(!!undefined);  //false

//17
console.log(Number("")); //0
console.log(Number(" "));//0
console.log(Number("0")); //0
console.log(Number("  25  ")); //25
console.log(Number("25px")); //NaN

//18
let val1 = "5";
let val2 = 2;
console.log(val1 + val2);  //52
console.log(+val1 + val2);  //7
console.log(val1 - val2); // 3
console.log(val1 * val2); //10
console.log(val1 / val2);// 2.5

//Bonus Mixed Practice Questions:
//19
let count = 5;
console.log(typeof count++);  //Number
console.log(count);           //6
console.log(typeof ++count); //Number
console.log(count);     //7

//20
let x = "10";
let y = ++x;
console.log(x, y, typeof x, typeof y);//11 11 number number

//21
let p = "5";
let b = p++;
console.log(p, b, typeof p, typeof b);//6 5 number number

//22
console.log(typeof (1 + "2")); //String
console.log(typeof (1 - "2")); //Number
console.log(typeof (1 * "2")); //Number
console.log(typeof (1 / "2")); //Number

//23
let val = null;
console.log(typeof val);  //Object
console.log(val + 1);     //1
console.log(val - 1);   //-1
console.log(val * 1);  //0
console.log(Boolean(val)); //false