/*
    Sets
    Sets (Küme, Çoxluq) - Array-lara bənzəyir
    Bir dəyəri sadəcə bir dəfə daşıyır
*/

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Qara");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({
    a: 1,
    b: 2
});

const mySet2 = new Set([100, 3.14, "Humbatov"]);

console.log(mySet);
console.log(mySet2);





// Set size
console.log(mySet.size);





// Delete Method
mySet.delete("Qara");

console.log(mySet);





// Has Method
console.log(mySet.has(100));
console.log(mySet.has(3.14));
console.log(mySet.has("Qara"));
console.log(mySet.has([1,2,3]));





// For Each
mySet.forEach(function (value) {
    console.log(value);
})





// For of
for (let value of mySet) {
    console.log(value);
}





// Set-lərdən Array yaratma
const array = Array.from(mySet);

console.log(array);