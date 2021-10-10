// Set Timeout

setTimeout(function() {
    console.log("Hello");
}, 2000);



// Set Interval
let i = 0;

let value = setInterval(function() {
    i++;
    console.log("Say: ",1);
}, 2000);



// Clear Interval
document.getElementById("btn").addEventListener("click", function() {
    clearInterval(value);
});