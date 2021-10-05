// Statik Metodlar

class Riyaziyyat {
    sqrt(x) {
        console.log(x * x);
    }

    static cube(x) {
        console.log(x * x * x);
    }
}

// Object yaradaraq metoddan istifadə etmək
/*
const math = new Riyaziyyat();
math.cube(3);

console.log(math);
*/



// Object yaratmadan metoddan istifadə etmək - static açar sözünü yazırıq
const math = new Riyaziyyat();
Riyaziyyat.cube(2);

console.log(math);
math.cube(4); // istifadə edə bilmirik - prototype-ə baxdıqda həmin funksiya tapılmır
// Statik metodlar prototype-ə yazılmır

Riyaziyyat.sqrt(5); // istifadə edə bilmirik - statik olmadığı üçün birbaşa istifadə edə bilmirik
// İstifadə edə bilmək üçün mütləq object yaratmaq lazımdı. Statik metodlar üçün object yaratmaq lazım deyil

// Object.create() metodu özü elə statikdir - yəni create funksiyası Object daxilinə static yazılmışdır
// Math.sqrt() - eyni ilə.