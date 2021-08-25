// Arrow Function - nisbətən funksiyanın daha qısa şəkildə yazım qaydası

// Normal bildiyimiz funksiya sintaksisi
const salam = function () {
    console.log("Salam!");
}

salam();

// Arrow Function - mötərizə daxilinə parametrlər, ardınca arrow işarəsi gəlir, sonra isə fiqurlu mötərizələr
const hello = () => {
    console.log("Hello!");
}

hello();

// Parametr ilə - tək parametrdə mötərizələrə ehtiyac yoxdur
const hola = firstName => {
    console.log("Hola!", firstName);
}

hola("Gara");

// *Funksiya tək bir əməliyyatı yerinə yetirirsə fiqurlu mötərizələri də yazmağa ehtiyac yoxdu. Yuxarıdakı nümunədə silə bilərik. Və bir sətrdə yazıb bitirə bilərik.
const privet = lastName => console.log("Privet!", lastName);
privet("Humbatov");

// Parametr ilə - heç parametr olmadan və ya birdən çox parametr olduqda mütləq mötərizələr olmalıdı
const merhaba = (isim, soyisim) => console.log("Merhaba!", isim, soyisim);
merhaba("Qara", "Hümbətov");



// Normal cube function
const cube = function (x) {
    return x * x * x;
}
console.log(cube(4));

// Arrow Function - Funksiya tək bir əməliyyat yerinə yetirisə return-ə də ehtiyac yoxdu
const cube2 = x => x * x * x;

console.log(cube2(4));