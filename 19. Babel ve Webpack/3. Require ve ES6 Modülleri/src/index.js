// CommonJS Modül

/*
const app = require("./module1");
*/

/*
    - Object kimi gəldikdə -
    console.log(app);
    app();
*/

/*
console.log(app.name);
app.test1();
console.log(app.person.name);
*/



// ES6 Modülleri

/*
import {test, Person} from "./module1";
Person.Test();
test();
*/

/*
import * as module1 from "./module1";
console.log(module1);
*/

/*
import Deneme from "./module1";
Deneme.deneme();
*/

import testValue, { test } from "./module1";
console.log(testValue)