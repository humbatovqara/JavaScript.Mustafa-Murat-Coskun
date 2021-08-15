const todoInput = document.getElementById("todo");
let element;

element = todoInput;

// DOM Token List
/*
element = todoInput.classList;
*/



// Class əlavə etmə
/* 
todoInput.className = "form-control newClass";
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
*/



// Remove - silmə
/*
todoInput.classList.remove("form-control");
*/



// Attribute
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
element = todoInput.setAttribute("placeholder","hello");
todoInput.setAttribute("title","input");
todoInput.removeAttribute("name");



element = todoInput;

/*
element = todoInput.hasAttribute("required"); // false 
element = todoInput.hasAttribute("name"); // true 
*/

console.log(element);