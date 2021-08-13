let value;



// Change to STRING
/*
value = 123;
value = String(123); // Number to String
value = String(3.14); // Number to String
value = String(true); // Boolean to String
value = String(function() {console.log()}); // Function to String
value = String([1, 2, 3, 4]); // Array to String

value = (10).toString();
value = (3.14).toString();
*/



// Change to NUMBER - NaN
/*
value = Number("123"); // String to Number
value = Number(null); // Null (0) to Number
value = Number(undefined); // NaN
value = Number("Hello World"); // NaN
value = Number(function() {console.log()}); // NaN
value = Number([1, 2, 3, 4]); // NaN

value = Number("3.14"); // String to Number
value = parseFloat("3.14");
value = parseInt("3");
*/



// Auto Change
const a = "Hello" + 34; // String + Number = String + String
console.log(a);
console.log(typeof a);

const b = "34" + 53; // String + Number = String + String
console.log(b);
console.log(typeof b);



console.log(value);
console.log(typeof value);