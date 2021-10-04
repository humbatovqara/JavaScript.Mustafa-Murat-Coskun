// Kalıtım - Inheritance - Miras alma



// Contructor - 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("Ad: " + this.name + " Yaş: " + this.age);
}



// Create object from constructor
/*
const person = new Person("Qara",21);

console.log(person);
*/



// Constructor - 2
function Employee(name, age, salary) {
    // this.name = name;
    // this.age = age;

    Person.call(this,name,age);
    this.salary = salary;
}



// Employee inheritance from Person
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.toString = function() {
    console.log("Employee");
}

// Overriding - Iptal etme
Employee.prototype.showInfos = function() {
    console.log("Ad: " + this.name + " Yaş: " + this.age + " Maas: " + this.salary);
}

const emp = new Employee("Qara",22,1500);

console.log(emp);
emp.showInfos();
emp.toString();

emp.showInfos();