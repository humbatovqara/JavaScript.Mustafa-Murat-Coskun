// Scope anlayışı - dəyişənlərin əhatə dairəsi
var database = "123456";





// Global scope - funksiya və ya şərt daxilində olmayan
/*
var value1 = 10;
let value2 = 20;
const value3 = 30;

console.log(value1, value2, value3);
*/





// Function scope
/*
function a() {

}

function Func() {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1, value2, value3);
}
Func();
*/





/* 
    Block scope
    var və let arasındakı fərqlərin biri də Block scope-da görünür. Belə ki, var kimi təyin olunan element scope-dan kənar da qəbul olunur. Let isə xəta verir.
*/
/*
if(şərt) {

}

if (true) {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1, value2, value3);
}
*/

if (true) {
    var database = "343434"; // parol dəyişdi, var-a görə. Let və const-da belə bir şey olmur.
}