/*
Referans tiplər - Date object, Object, Array - yaddaş ünvanları üzrə
Primitiv tiplər - String - dəyərlər üzrə
*/





// Primitiv
let a = "Qara";
let b = "Qara";

if (a === b) {
    console.log("=");
}





// Referans
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

// Yaddaşda eyni adresi göstərmədiyi üçün false nəticəsini alırıq
if (array1 === array2) {
    console.log("=");
}





// Öz yaratdığımız object
const person1 = {
    name: "Qara",
    age: 21
}

const person2 = {
    name: "Qara",
    age: 21
}

if (person1 === person2) {
    console.log("=");
}





// Map üzrə nümunə - Primitiv tip olduqda value (dəyər) görünür, referans tip olduqda əvvəlki izahatlar üçün value (dəyər) qaytarmır
const cities = new Map();

cities.set("Baku",10);
cities.set("Gandja",20);
cities.set([1, 2, 3], "Array");

console.log(cities.get([1, 2, 3]));