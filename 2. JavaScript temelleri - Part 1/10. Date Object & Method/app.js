let value;

const now = new Date(); // Cari zaman

const date1 = new Date("7-23-2000 23:15:00");
const date2 = new Date("July 23 2000");
const date3 = new Date("7/23/2000");



// Get method
value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();



// Set method
date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1999);
date1.setHours(12);
date1.setMinutes(18);
date1.setSeconds(30);
value = date1;

console.log(now);
console.log(value);