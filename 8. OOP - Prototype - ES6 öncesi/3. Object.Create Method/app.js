/* 
    Object.Create Method
*/

const obj = {
    test1: function() {
        console.log("Test 1");
    },
    test2: function() {
        console.log("Test 2");
    }
}

// console.log(obj);

// Nümunə 1 - asan forma
const emp = Object.create(obj);
emp.name = "Qara";
emp.age = 21;
console.log(emp);



// Nümunə 2 - qarışıq
function Person() {

}

Person.prototype.test1 = function() {
    console.log("Test 1");
}

Person.prototype.test2 = function() {
    console.log("Test 2");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function() {
    console.log("My Test");
}
const emp1 = new Employee("Qara",22);

emp.test1();