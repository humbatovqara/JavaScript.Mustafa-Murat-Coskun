// Window object
/*
console.log(window);
console.log(this);
*/



// nextSibling - "qardaş" element



// Document object
/*
console.log(this.document); // bütün HTML görünür
console.log(document);
*/



// Document all
/*
let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length - 1];

console.log(value);
*/



// For loop, forEach
/*
const elements = document.all; // HTML Collection



for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}



const collections = Array.from(document.all);
console.log(typeof collections);

collections.forEach(function(collection) {
    console.log(collection);
})
*/



// Document.body
let value;

value = document.all[6]; // Body
value = document.body;
value = document.head;
value = document.location;
value = document.characterSet;

console.log(value);