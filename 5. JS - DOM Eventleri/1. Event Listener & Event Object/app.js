// use Event Listeners & Event Objects
const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");



// Focus Event
// Method 1
/*
filterInput.onfocus = function() {
    console.log("Hello Focus!");
}
*/



// Method 2
/*
filterInput.addEventListener("focus",function(){
    console.log("Hello Add Event Listener Focus!");
});
*/



/*
filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
});
*/



// Submit Event
todoForm.addEventListener("submit",submitForm);

function submitForm(e) {
    console.log("Submit Event");

    e.preventDefault();
}