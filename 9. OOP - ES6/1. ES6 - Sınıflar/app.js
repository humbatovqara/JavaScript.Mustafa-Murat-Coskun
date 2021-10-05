// ES6 Class - Syntactic Sugar



// ES5 standarts
// Create Constructor
/*
function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
*/

// Add function to Employee Prototype
/*
Employee.prototype.showInfos = function () {
    console.log("Ad: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
}
*/

// Create Object from Constructor
/*
const emp = new Employee("Qara", 21, 250);

console.log(emp);
*/



// ES6 standarts
// Create Constructor and add Prototype
class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Avtomatik olaraq yazdığımız funksiya Prototype-ə əlavə ediləcək
    showInfos() {
        console.log("Ad: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }
}

// Create Object
const emp = new Employee("Qara", 21, 300);

console.log(emp);
emp.showInfos();