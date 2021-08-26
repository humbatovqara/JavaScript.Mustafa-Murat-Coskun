const person = {
    name: "Qara Humbatov",
    age: 21,
    salary: 3000
};

const langs = ["Python", "Java", "C++", "Php"];

const name = "Qara";



/* 
    For In
    - Objectdə property (özellik) üstündə gəzir, dəyərlər üzərində gəzmir
    - Arrayda index-lər üstündə gəzir, dəyərlər üzərindən gəzmir
    - Stringdə Arrayda olduğu kimi index-lər üzərində gəzir, dəyərlər üzərində gəzmir
*/
for (let prop in person) {
    console.log(prop, person[prop]);
}

for (let index in langs) {
    console.log(index, langs[index]);
}

for (let index in name) {
    console.log(index, name[index]);
}



/*
    For Of ilə
    - Object üzərində gəzə bilmirik, sadəcə Array-a bənzəyən verilən tipləri üzərində gəzə bilirik
    - Arrayda artıq index üzərində deyil, dəyər üzərində gəzə bilərik
    - Stringdə Arraydakı kimi
    - querySelectorAll ilə aldığımız elementlər və NodeList üzərində gəzə bilərik
*/
/*
for(let value of person) {
    console.log(value); //Type Error
}
*/

for (let value of langs) {
    console.log(value);
}

for (let character of name) {
    console.log(character);
}

// * Maps və Set-lərdə istifadə edə bilirik (For Of və For In)