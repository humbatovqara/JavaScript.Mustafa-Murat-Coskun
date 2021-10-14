class Request {

    // GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                // .them(response => response.text())
                .then(response => response.json())
                // .then(data => console.log(typeof data))
                // .then(data => console.log(data))
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}

const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => {
        console.log(albums);
    })
    .catch(err => console.log(err));

// Asenxron
// console.log(albums);