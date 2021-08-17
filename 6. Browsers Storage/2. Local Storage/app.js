/*
    Local Storage
    
    - Dəyərlər String tipində (çevrilərək) daxil edilir. Number olsa belə
*/



// Set Item
/*
localStorage.setItem("reng1","qirmizi");
localStorage.setItem("reng2","qara");
*/



// Get Item
/*
const value = localStorage.getItem("reng");
console.log(value);
console.log(typeof value);
*/



// Clear Local Storage
/*
localStorage.clear();
*/



// Olmayan key'i çağırma - nəticə NULL
/*
console.log(localStorage.getItem("sport"));

if (localStorage.getItem("reng1") === null) {
    console.log("Sorguladığınız veri bulunmuyor");
} else {
    console.log("Sorguladığınız veri bulunuyor");
}
*/



/*
    Local Storage - Array

    - JSON.stringify
    - JSON.parse
*/
/*
const todos = ["Todo 1","Todo 2","Todo 3"];

localStorage.setItem("todos", JSON.stringify(todos));

const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);
*/



/*
    Project
*/
// Select elements
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");



// Event Listener
form.addEventListener("submit", addTodo);



// Function
function addTodo(e) {
    const value = dotoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
}