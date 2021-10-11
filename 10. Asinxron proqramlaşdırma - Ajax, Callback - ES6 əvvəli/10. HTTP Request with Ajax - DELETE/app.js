// Ajax, Callback, HTTP Requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // GET Request
    get(url, callback) {
        this.xhr.open("GET", url);

        /*
            Üsul 1 - ilk üsul
            const temp = this;
        */

        /*
            Üsul 2
            this.xhr.status - hissəsində xhr silirik
        */

        /*
            Üsul 3
            this-in XHR-ni deyil, Request-i göstərməsi üçün .bind() istifadə edirik
        */

        /*
            Üsul 4
            Normal funksiyanı, Arrow function şəklində yazırıq
        */

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText); // İstək bitdi
            } else {
                callback("Error", null);
            }
        }

        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON datası göndərəcəyimizi deyirik

        this.xhr.onload = () => {
            if (this.xhr.status == 201) {
                callback(null, this.xhr.responseText);
            } else {
                callback("Error POST", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON datası göndərəcəyimizi deyirik

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText);
            } else {
                callback("Error PUT", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url);

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText); // İstək bitdi
            } else {
                callback("Error Delete", null);
            }
        }

        this.xhr.send();
    }

}

const request = new Request();

/*
request.get("https://jsonplaceholder.typicode.com/albums", function(err,response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});
*/

/*
request.get("https://jsonplaceholder.typicode.com/albums", function(err,response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});
*/

request.put("https://jsonplaceholder.typicode.com/albums/10", {
    userId: 143,
    title: "Test Albom"
}, function (err, album) {
    if (err === null) {
        console.log(album);
    } else {
        // Error
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err,response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});