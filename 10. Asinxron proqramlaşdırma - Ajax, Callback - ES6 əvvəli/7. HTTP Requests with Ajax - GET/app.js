// Ajax, Callback, HTTP Requests

class Request {
    constructor () {
        this.xhr = new XMLHttpRequest();
    }

    // GET Request
    get(url, callback) {
        this.xhr.open("GET",url);

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
                callback(null,this.xhr.responseText); // İstək bitdi
            }
            else {
                callback("Error",null);
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

request.get("https://jsonplaceholder.typicode.com/albums", function(err,response) {
    if (err === null) {
        console.log(response);
    }
    else {
        console.log(err);
    }
});