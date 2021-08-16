// Input Events
const filter = document.getElementById("filter");



// DOM Content Loaded
/*
document.addEventListener("DOMContentLoaded", load);

function load(e) {
    console.log("Site Loaded");
}
*/



// Focus & Blur Event - odajlanma ve odakdan çıkma
/*
filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
*/



// Paste & Copy & Cut Event
/*
filter.addEventListener("paste",run);
filter.addEventListener("copy",run);
filter.addEventListener("cut",run);
*/



// Select Event
filter.addEventListener("select",run);



function run(e) {
    console.log(e.type);
}