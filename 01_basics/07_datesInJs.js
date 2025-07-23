//Dates--->Its an Object

let myDate = new Date()
console.log(myDate);//2025-07-23T14:22:50.548Z
console.log(myDate.toString());//Wed Jul 23 2025 14:22:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Wed Jul 23 2025
console.log(myDate.toLocaleString());//7/23/2025, 2:22:50 PM
console.log(myDate.toLocaleTimeString());//2:22:50 PM
console.log(myDate.toLocaleDateString());//7/23/2025
console.log(myDate.toTimeString());//14:22:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());//2025-07-23T14:22:50.548Z
console.log(myDate.toUTCString());//Wed, 23 Jul 2025 14:22:50 GMT

console.log(typeof myDate);//Object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate2 = new Date(2023,0,23,5,7)
console.log(myCreatedDate.toLocaleString())//1/23/2023, 12:00:00 AM

let myCreatedDate3 = new Date("2023-01-24")//yyyy/mm/dd format
console.log(myCreatedDate3.toLocaleString())//2023-01-24T00:00:00.000Z

let myCreatedDate4 = new Date("01-13-2023")//mm/dd/yyyy format
console.log(myCreatedDate4.toLocaleString())
//It does not take dd/mm/yyyy format

let myTimeStamp = Date.now()
console.log(myTimeStamp);// 1753281810737-->Gives Date in milliSecond
console.log(myCreatedDate.getTime())//1674432000000--->Time in millisecond

console.log(Math.floor(Date.now()/1000));//1753282017--->Date in Second


let newDate = new Date()
console.log(newDate)//2025-07-23T14:50:39.437Z
console.log(newDate.getMonth())//6-->Month Number
console.log(newDate.getDay())//3--->Day number


console.log(`${newDate.getDay()} is the Day number`)//3 is the Day number

console.log(newDate.toLocaleString('default',{
    weekday:"long"    
})) //Wednesday



