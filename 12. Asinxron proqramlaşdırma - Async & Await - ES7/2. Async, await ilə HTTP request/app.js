class Request {

    // GET
    async get(url) {
        const response = await fetch(url); // Response Object
        const responsedata = await response.json(); // JSON Object
        return responsedata;
    }

    // POST
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });
        const responsedata = await response.json();
        return responsedata;
    }

    // PUT
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });
        const responsedata = await response.json();
        return responsedata;
    }

    // DELETE
    async delete(url, data) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: 'DELETE',
        });
        // const data = await response.json();
        // return data;

        return "Succesfull Delete process";
    }
}

const request = new Request();

/*---  GET  ---*/
/*
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => {
        console.log(albums);
    })
    .catch(err => console.log(err));
*/


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