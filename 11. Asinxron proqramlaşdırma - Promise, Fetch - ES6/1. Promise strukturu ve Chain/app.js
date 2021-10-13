function getData(data) { // Promise Object verən funksiya
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve("Müsbət nəticə");

            // reject("Mənfi nəticə");

            if (typeof data === "string") {
                // Müsbət nəticə
                resolve(data);
            } else {
                // Mənfi nəticə
                reject(new Error("String dəyər daxil edin"));
            }
        }, 5000);
    });
}

// console.log(getData("Hello"));

/*
getData("Hello").then(function(response) {
    console.log(response);
});
*/

/*
getData("Hello").catch(function(err) {
    console.log(err);
});
*/

/*
getData(12).then(function (response) {
    console.log("Dəyər: " + response);
}).catch(function (err) {
    console.error(err);
});
*/

getData(12)
    .then(response => console.log("Dəyər: " + response))
    .catch(err => console.error(err));



function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Enter number !!!"));
            }
        }, 5000);
    });
}

addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2;
    }).then(response2 => console.log(response2))
    .catch(err => console.log(err));