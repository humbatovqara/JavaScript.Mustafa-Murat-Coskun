const name = "Gara Humbatov";
const department = "Information Technology";
const salary = 5000;

function ca() {
    return "Hello";
}


// Köhnə üsul
const a = "Ad: " + name + "\n" + "Şöbə: " + department + "\n" + "Maaş: " + salary;


// Yeni üsul - Template Literal
const b = `Ad:${name}\nŞöbə:${department}\nMaaş:${salary}`;


// Real project 1
const html = "<ul>" +
             "<li>" + name + "</li>" + 
             "<li>" + department + "</li>" + 
             "<li>" + salary + "</li>" +
             "</ul>";

// Real project with Template Literal
const html2 = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10 / 4}</li>
                <li>${ca()}</li>
            </ul>
            `;

// document.body.innerHTML = html;
document.body.innerHTML = html2;
console.log(a);
console.log(b);