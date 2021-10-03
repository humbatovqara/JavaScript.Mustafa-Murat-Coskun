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
    this.showInfos = function() {
        console.log("Show Informations...");
    }
}

const emp1 = new Employee("Qara",21);

console.log(emp1);

console.log(emp1.toString()); // Object Prototype