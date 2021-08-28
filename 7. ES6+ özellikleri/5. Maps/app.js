/*
    Map data type - Map verilən tipi

    Maps - Key (Açar) - Value (dəyər)
*/



// Create Map
let myMap = new Map();

// console.log(myMap);

const key1 = "Soz";
const key2 = {a:10, b:20};
const key3 = () => 2;

// Set method
myMap.set(key1,"String deyer");
myMap.set(key2,"Object Literal deyer");
myMap.set(key3,"Function deyer");

// Get method
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

// Map size
console.log(myMap.size);






const cities = new Map();

cities.set("Baku", 5);
cities.set("Gandja", 15);
cities.set("Gabala", 4);

// For Each
cities.forEach(function(value, key) {
    console.log(key, value);
})

// For of - Destructing
for(let [key, value] of cities) {
    console.log(key, value);
}

// Map keys
for (let key of cities.keys()) {
    console.log(key);
}

// Map values
for (let value of cities.values()) {
    console.log(value);
}





// Array-lardan Map yaratmaq
const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);

console.log(lastMap);

// Map-lardan Array yaratmaq
const cities2 = new Map();

cities2.set("Baku", 5);
cities2.set("Gandja", 15);
cities2.set("Gabala", 4);

const array2 = Array.from(cities2);

console.log(array2);