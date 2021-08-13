// Funksiya təyin etmə - yaratma
/*
function hello () {
    console.log("Hello");
}

function func (name, age) {
    if (typeof name === "undefined") name = "Ad yoxdur!";

    if (typeof age === "undefined") age = "Yaş yoxdur!";

    console.log(`Ad: ${name}, Yaş: ${age}`);
}
*/





// Funksiyanı çağırma - Function Call
/*
hello();

func("Qara", 21);
func("Ülvi", 20);
func();
*/





// Default dəyər vermənin (func funksiyası kimi) qısayolu
/*
function person (surname = "Soyad yoxdur", name = "Ad yoxdur") {
    console.log(`Soyad: ${surname}, Ad: ${name}`);
}

person();
*/





/* Return - funksiya daxilindən bizə dəyər geri qaytarır. 
   Return yazılmadıqda Cube() funksiyası işləmir. 
   Çünki Square() funksiyasından dəyər gəlmir, alınan sadəcə funksiyanın nəticəsidir
    Return həmdə bir funksiyanı sonlandırmağı bildiri
*/

/*
function square(x) {
    // console.log(x * x);

    return x * x;

    console.log("Salam"); // Heç vaxt işləmir - Return-ə görə
}
*/

/*
function cube(x) {
    // console.log(x * x * x);

    return x * x * x;
}

// let a = square(12);

// a = cube(a);

let a = cube(square(12));

console.log(a);
*/





/*
function salam() {
    return "Salam";
}

console.log(salam());

// salam() funksiyasını - Function Expression kimi yaza bilərik
const merhaba = function (name) {
    console.log("Merhaba, " + name);
};

merhaba("Qara");
*/





/*
    IIFE - Immediately Invoked Function Expression
    Təyin olunduğu, yaradıldığı yerdə işləyən funksiyalar
*/
/*
(function(name) {
    console.log("Necəsən, " + name);
})("Nurlan");
*/




const database = {
    host: "localhost",
    add: function(){
        console.log("Əlavə edildi");
    },
    get: function(){
        console.log("Əldə edildi");
    },
    update: function(id){
        console.log(`Id: ${id} Yeniləndi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);