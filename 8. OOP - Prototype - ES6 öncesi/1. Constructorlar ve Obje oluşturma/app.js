// Class = Object

// key This and Constructor



/* 
    OOP - bizim öz Object-lərimiz ola bilər və bu Object-lərimizin özəllikləri və metodları ola bilər.
 */

console.log(window); // Window object özünün özəllik və metodlarına malikdir
console.log(this); // Global Scope = window object

// bildiyimiz Object yaratmaq - Object Literal
const emp1 = {
    name: "Qara",
    age: 21,
    showInfos: function () {
        console.log("Show Information");
    }
};

const emp2 = {
    name: "Nurlan",
    age: 20
};


console.log(emp1);
emp1.showInfos();
emp1.salary = 1500;



// CONSTRUCTOR - Yapıcı Fonksiyon - izah üçün
function Employee() {
    this.name = "Ulvi";
}

// Create Object from Constructor
const emp3 = new Employee();
const emp4 = new Employee();
console.log(emp3);
console.log(emp4);



// Daha doğru forma
function Telebe(ad, yas, maas) {
    this.ad = ad;
    this.yas = yas;
    this.maas = maas;

    console.log(this);
}

const telebeFuad = new Telebe("Fuad",21,300);
const telebeTebriz = new Telebe("Təbriz",21,100);



// Add function in Constructor
function Teacher(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name, this.surname, this.salary);
    }
}

const teacherA = new Teacher("Qara","Humbatov",3000);
teacherA.showInfos();

console.log(teacherA);