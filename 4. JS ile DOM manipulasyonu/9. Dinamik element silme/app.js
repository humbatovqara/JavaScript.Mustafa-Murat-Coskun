// Dinamik element silmə
const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");



//Remove method
/*
todos[0].remove();
*/



// Remove Child
// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);



console.log(todos);
console.log(todoList);