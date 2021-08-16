// Keyboard Events
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    header.textContent = e.target.value;
    // console.log(e.target.value);
}



// Key Press - yalnız rəqəm və hərflər
/*
document.addEventListener("keypress",run);

function run(e) {
    // console.log(e.which); // ASCII kod
    console.log(e.key);
    // console.log("Hello!");
}
*/



// Key Down - həm rəqəm, hərflər, həm də funksional digər düymələr
/*
document.addEventListener("keydown",run);

function run(e) {
    console.log(e.key);
}
*/



// Key Up - klavişi buraxan zaman tətiklənir
/*
document.addEventListener("keyup",run);

function run(e) {
    console.log(e.key);
}
*/