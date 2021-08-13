let value;

const programmer = {
    name : "Gara Humbatov",
    age : 21,
    email : "qarahumbtov@gmail.com",
    langs : ["HTML","CSS","Javascript"],

    address : {
        city : "Baku",
        street : "Yasamal"
    },

    // Method
    work : function() {
        console.log("Proqramçı işləyir ...");
    }
}

value = programmer;
value = programmer.email;
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();



// JSON
const proqrammers = [
    {name : "Qara",age : 21},
    {name : "Ali",age : 25}
];

value = proqrammers[0];
value = proqrammers[0].name;

console.log(value);