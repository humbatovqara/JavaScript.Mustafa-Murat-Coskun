// İnternet üzərindən REST API-dən Data çəkək

document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=feb030dd4c0bfa339222c91df60a2bbd");

    xhr.onload = function () {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY; 
            const amount = Number(document.getElementById("amount").value);
            
            document.getElementById("tl").value = Math.round(amount * rate);
        }
    }

    xhr.send();
}