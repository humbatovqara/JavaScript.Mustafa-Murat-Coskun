// Replace
// h5 to h3
const cardBody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";

// Eski element
const oldElement = document.querySelector("#tasks-title");

cardBody.replaceChild(newElement, oldElement);

console.log(newElement);