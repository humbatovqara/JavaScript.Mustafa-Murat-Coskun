let value;
const value1 = 10;
const value2 = 4;



// Riyazi operatorlar
/*
value = value1 + value2; // Toplama
value = value1 - value2; // Çıxma
value = value1 * value2; // Vurma
value = value1 / value2; // Bölmə
value = value1 % value2; // Qalıq
*/



// Math object
value = Math.PI;
value = Math.E;

/* Round - .5-dən kiçikləri aşağı, özü daxil olmaqla böyükləri yuxarı rəqəmə yuvarlaqlaşdırır */
value = Math.round(3.6); // 3.6 -> 4
value = Math.round(3.5); // 3.5 -> 4
value = Math.round(3.2); // 3.2 -> 3

/* Ceil - bütün vergüllü rəqəmləri yuxarı rəqəmə yuvarlaqlaşdırır */
value = Math.ceil(3.2); // 3.2 -> 4
value = Math.ceil(3.7); // 3.7 -> 4

/* Floor - bütün vergüllü rəqəmləri aşağı rəqəmə yuvarlaqlaşdırır */
value = Math.floor(3.2); // 3.2 -> 3
value = Math.floor(3.7); // 3.7 -> 3

/* SQRT - kökaltı */
value = Math.sqrt(16);
value = Math.sqrt(31);

/* ABS - modul */
value = Math.abs(-10);

/* POW - üst, qüvvət */
value = Math.pow(8,3);
value = Math.pow(4,2);

/* MAX, MIN */
value = Math.max(10, -1, 100, 32);
value = Math.min(10, -1, 100, 32);

/* RANDOM */
value = Math.random();
value = Math.floor(Math.random() * 20 + 1);

console.log(value);