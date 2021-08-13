// Var, Let, Const
// ES6 - Let & Const



// ***Var***
/*
var a;
var name = "Gara Humbatov";
var name = "Qara Hümbətov"; // dəyişənə yeni dəyər əlavə edirik, köhnə dəyər silinir

a = 20;

console.log(name);

name = "Humbatov"; // dəyişənə yeni dəyər əlavə edirik (digər üsul)
console.log(name);
*/



// ***Let***
/*
let name = "Gara Humbatov";
let name = "Qara Hümbətov"; // let ilə var-ın fərqi, let ilə ikinci dəfə təyin olunmur

console.log(name);

name = "Humbatov";

console.log(name);

let a, b;
a = 10;
b = 20;
console.log(a + b);
*/



// ***Const***
/*
const name = "Gara Humbatov";

console.log(name);

name = "Qara Hümbətov"; // Const-a ikinci dəfə dəyər təyin olunmur (atama işlemi ile olmaz)

console.log(name);

const a; // Dəyəri sonradan vermək olmaz. İlk başda vermək lazımdı

a = 10;

console.log(a);
*/



// ***Müsahibə sualı***
/* Yuxarıdakı const a - primitive data type-dir. Əgər massiv (array) olsa idi, sonradan dəyər mənimsədə bilərdin - YOX! */
/*
const b = [1, 2, 3, 4, 5];

console.log(b);

b = [1, 2, 3, 4, 5, 6];

console.log(b);
*/

/* Lakin array metodlarından istifadə edərək dəyər mənimsədə bilərik (pull, push və s.) */