// Yeni element yaratma
const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.az";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı sayfaya Git"));
cardBody.appendChild(newLink);



// Text Content - istifadəsi məntiqli deyil
/*
newLink.textContent = "Farklı sayfaya git";
*/



// Text Node - child element add
/*
const text = document.createTextNode("Salam");
*/



// Append Child - ən sona əlavə edir
/*
cardBody.appendChild(text);
*/



// console.log(cardBody);
console.log(newLink);