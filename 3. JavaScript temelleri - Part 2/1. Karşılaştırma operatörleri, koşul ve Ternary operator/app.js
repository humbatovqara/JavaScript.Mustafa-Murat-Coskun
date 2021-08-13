/* 
    Müqayisə operatorları: 
    
    1. ==
    2. ===
    3. !=
    4. !==
    5. >
    6. <
    7. >=
    8. <=
*/



// ==
/*
console.log(2 == 2); // true
console.log("js" == "java"); // false
console.log(2 == "2"); // true
*/



// ===
/*
console.log(2 === "2"); // false
*/



// >
/*
console.log(4 > 2); // true
console.log(2 > 4); // false
*/



// !=
/*
console.log(2 != 4); // true
console.log(2 != 2); // false
*/



// <
/*
console.log(2 < 4); // true
console.log(4 < 2); // false
*/



// >=
/*
console.log(4 >= 2); //true
console.log(2 >= 2); //true
console.log(2 >= 4); //false
*/



// <=
/*
console.log(2 <= 4); // true
console.log(4 <= 2); // false
*/



/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/



/*
    Məntiqi operatorlar:
    1. NOT - !
    2. AND - &&
    3. OR - ||
*/



// Not - !
/*
console.log(!(2 == 2)); // false
console.log(!(2 != 2)); // true
*/



// AND - &
/*
console.log((2 == 2) && ("Ahmet" == "Ahmet")); // true
console.log((4 == 2) && ("Ahmet" == "Ahmet")); // false
*/



// OR - ||
/*
console.log((4 == 2) || ("Ahmet" == "Ahmet")); // true
console.log((4 == 2) || ("Ahmet" != "Ahmet")); // false
*/



/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/



/*
    Şərt operatorları: if, else if, else
*/

/*
const error = true;

if (error == true) {
    console.log("Xəta yarandı");
} else {
    console.log("Xəta yaranmadı");
}
*/

/*
const user = "mmc";

if (user === "mmc") {
    console.log("İstifadəçi mövcuddur");
} else {
    console.log("İstifadəçi tapılmadı");
}
*/

/*
const process = "1";

if (process === "1") {
    console.log ("Task 1");
} else if (process === "2") {
    console.log("Task 2");
} else if (process === "3") {
    console.log("Task 3");
} else if (process === "4") {
    console.log("Task 4");
} else {
    console.log("Error Task");
}
*/



/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/



// Ternary operator - şərt operatorunun qısaldılmış forması

const number = 100;

/*
console.log(number === 100 ? "Say 100" : "Say 100 deyil");
*/

if (number === 100) console.log("Say 100");