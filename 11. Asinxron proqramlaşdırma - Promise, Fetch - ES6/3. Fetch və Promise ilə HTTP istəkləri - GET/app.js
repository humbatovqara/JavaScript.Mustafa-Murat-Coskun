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

    // POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Constent-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    // PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        "Constent-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    // DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE'
                })
                .then(response => resolve("Successfull"))
                .catch(err => reject(err));
        })
    }

}

const request = new Request();

/*---  GET  ---*/
// let albums;

/*
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => {
        console.log(albums);
    })
    .catch(err => console.log(err));
*/

// Asenxron
// console.log(albums);



/*---  POST  ---*/
/*
request.post("https://jsonplaceholder.typicode.com/albums", {
        userId: 1,
        title: "Test"
    })
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err));
*/



/*---  PUT  ---*/
/*
request.put("https://jsonplaceholder.typicode.com/albums/1", {
        userId: 10,
        title: "Test PUT"
    })
    .then(album => console.log(album))
    .catch(err => console.log(err));
*/



/*---  DELETE  ---*/
request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err));