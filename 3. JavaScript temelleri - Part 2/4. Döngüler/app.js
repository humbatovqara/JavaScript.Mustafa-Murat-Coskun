// While Loop
/*
let i = 0;

while(i < 10) {
    console.log(i);

    // i = i + 1;
    // i += 1;
    i++;
}
*/

/*
let i = 10;

while (i > 0) {
    console.log(i);

    // i = i -1;
    // i -= 1;
    // i--;

    i = i - 2;
}
*/





// Break & Continue
/*
let i = 0;

while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
*/

/*
let i = 0;

while (i < 10) {
    if (i == 3 || i == 5) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
*/





// Do While Loop
/*
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);
*/





// For Loop
const langs = ["Python", "JavaScript", "Java"];

/*
let index = 0;

while (index < langs.length) {
    console.log(langs[index]);

    index++;
}
*/

/*
for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);
}
*/





// For each - callback
/*
langs.forEach(function (lang, index) {
    console.log(lang, index);
});
*/





// Map function
/*
const users = [
    {name:"Qara",age:21},
    {name:"Nurlan",age:20},
    {name:"Ulvi",age:19}
];

const names = users.map(function(user) {
    return user.name;
});

const ages = users.map(function(user) {
    return user.age;
});

console.log(names);
console.log(ages);
*/





// For in
const user = {
    name:"Qara",
    age:21
};

for (let key in user) {
    console.log(key,user[key]);
}