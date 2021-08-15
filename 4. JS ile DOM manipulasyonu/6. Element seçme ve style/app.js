const element = document.querySelector("#clear-todos");

// Element Özellikleri
/*
console.log(element.id);
console.log(element.className);
console.log(element.classList); // DOMTokenList
console.log(element.classList[0]);
console.log(element.classList[1]);
console.log(element.textContent); // Sadəcə Yazılar
console.log(element.innerHTML);
console.log(element.href);
*/



// Style ve Element özelliklerini değiştirme
/*
console.log(element.style); // CSS Sttyle DecLaration Object
element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "20px";
element.href = "https://www.google.az";
element.target = "_blank";
element.textContent = "Silin";
element.textContent = "<span>Silin</span>";
element.innerHTML = "<span style = 'color:green'>Silin</span>"
*/



/*
const elements = document.querySelectorAll(".list-group-item"); // Node List
elements.forEach(function(el) {
    el.style.color = "red";
    el.style.background = "#eee";
});
*/



let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)"); // Node List
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el) {
    el.style.background = "#ccc";
    el.style.color = "red";
});

console.log(element2);



// console.log(element);