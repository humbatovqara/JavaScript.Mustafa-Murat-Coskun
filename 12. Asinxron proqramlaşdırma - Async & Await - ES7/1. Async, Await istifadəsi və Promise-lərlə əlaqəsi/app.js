// 1. Sadə Funksiya

/*
function test(data) {
    return data;
}
*/





// 2. Async Funksiya

async function test(data) {
    // Promise return new Promise
    return data;
}

test("Hello")
    .then(response => console.log(response));





// 3. use Await
async function test2(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("It is a value")
        }, 5000)
    });

    let response = await promise; // 5 saniyə gözləyir

    // console.log(response);
    // console.log("Hello");

    return response;
}

test2("Hello").then(response => console.log(response));
// test2("Hello");





// 4. Check Error - Async, Await with Promise
async function testData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data)
            } else {
                reject(new Error("Enter string value !"));
            }
        }, 5000)
    });

    const response = await promise;
    return response;
}

testData("Simple")
    .then(data => console.log(data))
    .catch(err => console.log(err));





// 5. Async, await with Fetch
async function getCurrency(url) {
    const response = await fetch(url); // Response Object

    console.log(response);

    const data = await response.json(); // JSON Object

    // console.log(data);
    return data;
}

getCurrency("https://jsonplaceholder.typicode.com/posts")
.then(response => console.log(response));