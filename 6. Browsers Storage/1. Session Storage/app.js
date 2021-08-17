/*
    Local Storage
    - Dəyərlərimizi özümüz silmədiyimiz müddətcə sabit qalır

    Session Storage
    - Sessiya (oturum) açıq qaldığı müddətcə sabit qalır
    - Key / Value dəyərləri ilə depolayır
*/



// Session Storage - Key & Value



// Button'lar
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");



// Input'lar
const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");



// Event Listener
add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);



// Functions
function addItem(e) {
    sessionStorage.setItem(addKey.value, addValue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deleteKey.value);
}

function clearItems(e) {
    sessionStorage.clear();
}