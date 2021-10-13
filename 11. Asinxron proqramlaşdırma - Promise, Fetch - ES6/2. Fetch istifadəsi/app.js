// Text fayldan Data almaq
function getTextFile() {
    fetch("test.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// getTextFile();




// Local JSON fayldan Data almaq
function getJsonFile() {
    fetch("test.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// getJsonFile();



// External JSON
function getExternalAPI() {
    fetch("External API URL")
        .then(response => response.json())
        .then(data => {
            console.log(data.rates.TRY);
        })
        .catch(err => console.log(err));
}

getExternalAPI();