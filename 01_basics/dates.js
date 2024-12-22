let mydate = new Date()

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString()); //12/22/2024, 10:51:04 AM
console.log(typeof mydate); // return object

let myCreatedDate = new Date(2024,11,22)
let myCreatedDate1 = new Date(2024,11,22,4,29)
let myCreatedDate2 = new Date("2024-12-22")
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());

// timestamps - imp 
let myTimestamps = Date.now()
console.log(myTimestamps);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // get month
console.log(newDate.getDay()); // get day name
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}
))








