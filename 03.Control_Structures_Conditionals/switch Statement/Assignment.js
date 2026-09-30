//1
let month = 12;
switch(month){
    case 1:
        console.log("31 days")
        break;
    case 2:
        console.log("28 days")
        break;
    case 3:
        console.log("31 days")
        break;
    case 4:
        console.log("30 days")
        break;
    case 5:
        console.log("31 days")
        break;
    case 6:
        console.log("30 days")
        break;
    case 7:
        console.log("31 days")
        break;
    case 8:
        console.log("31 days")
        break;
    case 9:
        console.log("30 days")
        break;
    case 10:
        console.log("31 days")
        break;
    case 11:
        console.log("30 days")
        break;
    case 12:
        console.log("31 days")
        break;
    default:
        console.log("Invalid")
}

//2
let character = "p";
switch(character){
    case "a":
        console.log("vowel")
        break;
    case "e":
        console.log("vowel")
        break;
    case "i":
        console.log("vowel")
        break;
    case "o":
        console.log("vowel")
        break;
    case "u":
        console.log("vowel")
        break;  
    case "A":
        console.log("vowel")
        break;
    case "E":
        console.log("vowel")
        break;
    case "I":
        console.log("vowel")
        break;
    case "O":
        console.log("vowel")
        break;
    case "U":
        console.log("vowel")
        break; 
    default:
        console.log("consonant")       
}

//3
let season = 1;
switch(season){
    case 1:
        console.log("Winter")
        break;
    case 2:
        console.log("Winter")
        break;    
    case 3:
        console.log("Summer")
        break;    
    case 4:
        console.log("Summer")
        break;
    default:
        console.log("Invalid season")
}

//4
let marks = 65;
switch(true){
    case marks>=75 && marks<=100:
        console.log("Distinction")
        break;
    case marks>=60 && marks<=74:
        console.log("1st class")
        break;
    case marks>=50 && marks<=59:
        console.log("2nd class")
        break;
    case marks>=35 && marks<=49:
        console.log("3rd class")
        break;
    case marks>=0 && marks<=34:
        console.log("Failed")
        break;
    default:
        console.log("please enter marks is in range:0 to 100")
}

//5
let role = "admin";
switch (role) {
    case "admin":
        let action = "create";
        switch (action) {
            case "create":
                console.log("admin  can create")
                break;
            case "edit":
                console.log("admin can edit")    
                break;
            case "delete":
                console.log("admin can delete")
                break;
            default:
                console.log("please enter action")
        }
        break;
    case "user":
        console.log("Limited Access")
    default:
        console.log("Invalid")    
}

//6
let fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break;
  case "mango":
    console.log("Mango is yellow");
    break;
  case "banana":
    console.log("Banana is yellow");
    break;
  default:
    console.log("Unknown fruit");
}

//7
let value = 0;
switch (value) {
    case 0:
        console.log("Number zero");
        break;
    case "0":
        console.log("String zero");
        break;
    case false:
        console.log("Boolean false");
        break;
    case null:
        console.log("Null value");
        break;
    case undefined:
        console.log("Undefined value");
        break;
    default:
        console.log("Unknown value");
}

//8
let choice = "+";
let num1 = 7;
let num2 = 5;
switch (choice){
    case "+":
        console.log("sum",num1+num2);
        break;
    case "-":
        console.log("subtraction",num1-num2);
        break;
    case "*":
        console.log("multiply",num1*num2);
        break;
    case "/":
        console.log("divide",num1/num2);
        break;
    case "%":
        console.log("modulus",num1%num2);
        break;
    case "**":
        console.log("power",num1**num2);
        break;
    case num2===0:
        console.log("zero division error enter another number");
        break;
    default:
        console.log("invalid input")
}



//9
let day = 15;
switch (true){
    case day>=1 &&day<=10:
        console.log("Beginning of the month");
        break;
    case day>=11 && day<=20:
        console.log("Middle of the month");
        break;
    case day>=21 && day<=31:
        console.log("End of the month");
        break;
    default:
        console.log("invalid date")
}


//Q10
let category = "veg";
let item;
let size;
let price = 0;
switch (category) {
    case "veg":
        item = "pizza";
        switch (item) {
            case "pizza":
                size = "half";
                switch (size) {
                    case "half":
                        price = 120;
                        break;
                    case "full":
                        price = 220;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            case "burger":
                size = "full";
                switch (size) {
                    case "half":
                        price = 80;
                        break;
                    case "full":
                        price = 150;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            default:
                console.log("Invalid veg item");
        }
        break;
    case "nonveg":
        item = "chicken";
        switch (item) {
            case "chicken":
                size = "full";
                switch (size) {
                    case "half":
                        price = 180;
                        break;
                    case "full":
                        price = 320;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            case "biryani":
                size = "full";
                switch (size) {
                    case "half":
                        price = 150;
                        break;
                    case "full":
                        price = 280;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            default:
                console.log("Invalid nonveg item");
        }
        break;
    default:
        console.log("Invalid category");
}
if (price > 0) {
    console.log("----- ORDER SUMMARY -----");
    console.log("Category:", category);
    console.log("Item:", item);
    console.log("Size:", size);
    console.log("Price: ₹" + price);
}