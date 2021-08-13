let value;

// Array yaratmaq - üsul 1
const numbers = [43, 56, 33, 23, 44, 35, 5];

// Array yaratmaq - üsul 2
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Python", "Java", "C++", "JavaScript"];

const a = ["Merhaba", 22, null, undefined, 3.14];



/* LENGTH */
value = numbers.length;

/* Index'ləmə */
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

/* Hər hansı indexdəki dəyəri dəyişdirmə */
numbers[2] = 1000;
value = numbers;

/* Index Of */
value = numbers.indexOf(1000);

/* Array'ın sonuna dəyər əlavə etmək - Push */
numbers.push(2000);
value = numbers;

/* Array'ın əvvəlinə dəyər əlavə etmək - Unshift */
numbers.unshift(3000);
value = numbers;

/* Array'ın sonundan dəyər silmək - Pop */
numbers.pop();
value = numbers;

/* Array'ın əvvəlindən dəyər silmək - Shift */
numbers.shift();
value = numbers;

/* Splice -  Birinci ədəd daxil, ikinci ədəd daxil olmadan aralıq silinir */
numbers.splice(0, 3);
value = numbers;

/* Reverse - Array-i tərs çevirmə */
numbers.reverse();
value = numbers;

/* Sort - Sıralama */
value = numbers.sort();

value = numbers.sort(function (x, y) { // Kiçikdən böyüyə sıralama
    return x - y;
});

value = numbers.sort(function (x, y) { // Böyükdən kiçiyə sıralama
    return y - x;
});



console.log(value);