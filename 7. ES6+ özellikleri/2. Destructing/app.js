/*
    Destructing
    - Arrayların içindən və ya object içindən dəyərləri almaq üçün qısa yol
*/





// Bildiyimiz üsul
let number1, number2;

arr = [100, 200, 300, 400];

number1 = arr[0];
number2 = arr[1];

console.log(number1, number2);





// Qısa yeni üsul - Destructing
let num1, num2;

arr = [100, 200, 300, 400];

[num1, num2] = arr;
// [num1, num2] = [100, 200, 300, 400];

console.log(num1, num2);





// Dəyişəni destructing daxilində də təyin etmək olar - const, let, var
const [numb1, numb2] = arr;
console.log(num1, num2);





// Object Destructing - arraydakı kimi index-ə sıraya baxmır. Gərək özəlliyin adı düzgün olsun ki, nəticə versin. Adlar a, c, e yox, number ilə əvəz etmək istəsək yazılış tərzi dəyişilir
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
};

/*
const {
    n1,
    n2,
    n3
} = numbers;
*/

const {
    a: n1,
    c: n2,
    e: n3
} = numbers;

console.log(n1, n2, n3);





// Function Destructing - Array qaydası

const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1, lang2, lang3);

// Object Destruction 2
const person = {
    name: "Qara Humbatov",
    year: 2000,
    salary: 1500,
    showInfos: () => console.log("Showing Information ...")
}

const {name:ad, year:il, salary:maas, showInfos:dataGoster} = person;
console.log(ad, il, maas);
dataGoster();