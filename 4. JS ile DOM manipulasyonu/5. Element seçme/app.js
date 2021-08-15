let element;

// Element'i ID görə seçmə
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");



// Element'i CLASS görə seçmə - HTML Collection
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");



// Element'i TAG görə seçmə - HTML Collection
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");



// Query Selector - CSS selector (id, class). İlk tapdığı elementi seçir (tək element qaytarır)
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");



// Query Selector All - birdən çox element seçmə. NodeList object qaytardı
// ForEach ilə elementlər üzərində gəzə bilərik
element = document.querySelectorAll(".list-group-item");

element.forEach(function(el) {
    console.log(el);
});

console.log(element);