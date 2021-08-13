let value;

const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java,Python,C++";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Gara Humbatov ";
value += "Alakbar";



/* LENGTH - string'in uzunluğu */
value = firstName.length;


/* CONCAT - əlavə et, birləşdir */
value = firstName.concat(" ", lastName," ","One");


/* toLowerCase, toUpperCase */
value = firstName.toLowerCase();
value = lastName.toUpperCase();


/* Index'ləmə */
value = firstName[0];
value = firstName[2];
value = firstName[firstName.length - 1];


/* Index Of */
value = firstName.indexOf("L"); // ilk qarşılaşdığı zaman, index-i göstərir
value = firstName.indexOf("l"); // hərfi tapmadıqda -1 göstərir


/* Char At */
value = firstName.charAt(0); // Index'ləmə üsulu ilə eyni


/* Split */
value = langs.split(","); // Elementlərə bölmə, ayırma


/* Replace */
value = langs.replace("Python","CSS"); // Elementi dəyişdirmə, əvəzləmə


/* Includes */
value = langs.includes("Java"); // Elementin daxil olub-olmadığını yoxlayır. Nəticə boolean göstərir

console.log(value);