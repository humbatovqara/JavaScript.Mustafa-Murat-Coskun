/* 
    HTTP Status
    200 : OK
    403 : Forbidden
    404 : Not Found
    505 : Internal Server Error
*/

/*
    Status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
*/

document.getElementById("btn").addEventListener("click", function() {

    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    /*
    xhr.onprogress = function() {
        console.log("Process Işlənir...", this.readyState);
    }
    */
    
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    /*
    xhr.onreadystatechange = function() {
        // console.log(this.readyState);
        // console.log(this.status);

        if(this.status == 200 && this.readyState == 4) {
            // Response Hazır
            console.log(this.responseText);
        }
    }
    */

    xhr.open("GET","test.txt",true);

    xhr.send();
});