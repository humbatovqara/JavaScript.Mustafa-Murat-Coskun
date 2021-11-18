// CommonJS

/*
module.exports.test1 = function test1(){
    console.log("Test 1");
}

module.exports.test2 = function test2(){
    console.log("Test 2");
}
*/

/*
module.exports = {
    name : "Gara",
    test1 : function () {
        console.log("Test1");
    },
    person : {
        name : "Nurlan",
        mail : "nurlan.00@mail.ru"
    }
}
*/



// ES6 Modülleri
export const name = "Gara";

export function test () {
    console.log("Function Test");
};

export class Person {
    static Test() {
        console.log("Person Test");
    }
}

export const employee = {
    name : "Ulvi",
    salary : "4000"
}

/*
export default class Deneme {
    static deneme() {
        console.log("Default Deneme");
    }
}
*/

const testValue = "Test Value";
export default testValue;