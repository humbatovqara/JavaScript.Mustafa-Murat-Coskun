/*
const object = new Object();
const object2 = new Object();
object.name = "Qara";

console.log(object);
*/

// Ən təməl contructor Object constructordur
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function () {
    console.log("Ad: " + this.name + "Yaş: " + this.age);
}

const emp1 = new Employee("Qara", 21);
const emp2 = new Employee("Nurlan", 22);

console.log(emp1);
console.log(emp2);

// Prototype 2 - methodu prototype-ə yazmaq

// Prototype 1
console.log(emp1.toString()); // Object Prototype