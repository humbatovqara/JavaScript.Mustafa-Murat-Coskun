// Mouse Event
const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");



// Click Event
/*
title.addEventListener("click",run);

function run(e) {
    console.log(e.type);
}
*/



// Double Click Event
/*
title.addEventListener("dblclick",run);

function run(e) {
    console.log(e.type);
}
*/



// Mouse Down Event - Klik davam etdiyi müddətcə. Kliklə oxşardır
/*
title.addEventListener("mousedown",run);

function run(e) {
    console.log(e.type);
}
*/



// Mouse Up Event - Əlimizi klikdən çəkdikdə
/*
title.addEventListener("mouseup",run);

function run(e) {
    console.log(e.type);
}
*/



// Mouse Over Event - Element üzərinə gələn zaman
/*
title.addEventListener("mouseover",run);

function run(e) {
    console.log(e.type);
}
*/



// Mouse Out Event
/*
title.addEventListener("mouseout",run);

function run(e) {
    console.log(e.type);
}
*/



// Mouse Over Evenet - Card Body üzərində olduqda, daxilindəki digər elementlərə (child) keçid etdikdə də tətiklənir
/*
cardBody.addEventListener("mouseover",run);
cardBody.addEventListener("mouseout",run);

function run(e) {
    console.log(e.type);
}
*/



// Mouse Enter & Mouse Leave Event - Mouse over kimi hər child elementdə hesablamır. Parent-də bir dəfə hesablayır vəssalam.
cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);

function run(e) {
    console.log(e.type);
}