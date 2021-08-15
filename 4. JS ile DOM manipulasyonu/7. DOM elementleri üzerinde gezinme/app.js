// DOM HTML Tree
let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value - cardrow;



// Child Nodes - Text daxil
value = todoList.childNodes;
value = todoList.childNodes[0];



// Children - Element özü
value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Change";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Change 2";



// First Element Child, Last Element Child
value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;



// Say - length, count
value = todoList.children.length;
value = todoList.childElementCount;



// Parent
value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;



// Element kardeşleri - Sibling
value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;

console.log(value);