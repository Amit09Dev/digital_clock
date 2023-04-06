const timer = () =>{

 let a = new Date();

//  getting time 
 let hour = a.getHours();
 let h = hour > 12 ? hour % 12 : hour;
 let min = a.getMinutes();
 let sec = a.getSeconds();
 let ampm = hour >= 12 ? 'PM' : 'AM';

//  getting day, date, month and year

let date = a.getDate();
let d = a.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = daysOfWeek[d];

let m = a.getMonth();
const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
let month = monthOfYear[m];

let year = a.getFullYear();


document.getElementById('date').innerHTML = `${day}, ${date}-${month}-${year}`
document.getElementById('hours').innerHTML = h;
document.getElementById('minutes').innerHTML = min;
document.getElementById('seconds').innerHTML = sec;
document.getElementById('ampm').innerHTML = ampm;
}
setInterval(timer, 999)