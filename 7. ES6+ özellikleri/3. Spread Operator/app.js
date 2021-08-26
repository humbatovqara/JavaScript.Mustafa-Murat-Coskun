// Spread operator - Array daxilindəki elementləri ayrı-ayrılıqda yazmaq

// I nümunə
const langs = ["Python", "C++", "Java", "Php"];

// Üsul 1 - tövsiyyə olunmur
// console.log(langs[0],langs[1],langs[2],langs[3]);

// Üsul 2 - Spread
console.log(...langs);





// II nümunə
// Üsul 1 - tövsiyyə olunmur
// const langs2 = ["JavaScript","C#", langs[0],langs[1],langs[2],langs[3]];


// Üsul 2 - Spread
const langs2 = ["JavaScript", "C#", ...langs];
console.log(langs2);





// III nümunə - Spread and Destructing
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...numbers2] = numbers;
console.log(a, b);
console.log(numbers2);
*/





// IV nümunə
const addNumbers = (a, b, c) => {
    console.log(a + b + c);
}

const numbers = [100, 200, 300];

// Üsul 1 - tövsiyə olunmur
// addNumbers(numbers[0],numbers[1],numbers[2]);

// Üsul 2 - Spread
addNumbers(...numbers);