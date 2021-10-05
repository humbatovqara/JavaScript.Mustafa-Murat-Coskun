class Person { // SuperClass, BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("Ad: " + this.name + " Yaş: " + this.age);
    }
}

class Employee extends Person { // DerivedClass, SubClass, ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        // super.showInfos();
        this.salary = salary;
    }
    showInfos() { // Overriding
        console.log("Ad: " + this.name + " Yaş: " + this.age);
    }
    toString() { // Overriding
        console.log("Employee");
    }
    raiseSalary(amount) {
        this.salary += amount;
    }
}

const emp = new Employee("Qara", 21, 3000);
emp.raiseSalary(500);
console.log(emp);
emp.showInfos();
emp.toString();