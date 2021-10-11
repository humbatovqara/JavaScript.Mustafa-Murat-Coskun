// Callback Function

// Nümunə 1
const langs = ["Python", "Java", "C++"];

langs.forEach(function(lang){
    console.log(lang);
});




// Nümunə 2
document.getElementById("btn").addEventListener("click",function() {
    console.log("Click");
});



// Nünumə 3
function process1(callback) {
    // console.log("Process 1");
    setTimeout(function(){
        console.log("Process 1");
        callback();
    }, 3000)
}

function process2() {
    // console.log("Process 2");
    setTimeout(function() {
        console.log("Process 2");
    }, 2000)
}

process1(process2);



// Nümunə 4
const langs2 = ["JavaScript","Swift","Flutter"];

function addLang(lang, callback) {
    setTimeout(function(){
        langs2.push(lang);
        console.log("Əlavə edildi");
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(function() {
        langs2.forEach(function(lang) {
            console.log(lang);
        });
    }, 1000);
}

addLang("Node JS", getAllLangs);
// getAllLangs(); // Asenxron Vəziyyət