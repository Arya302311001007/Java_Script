const score = 400
console.log(score)

const balance = new Number(100)// Creating a number object Which is Surely a number
console.log(balance)//[Number: 100]

//________________________Methods__________________________________\\
console.log(balance.toString())//100 Converts Number to string
console.log(typeof balance.toString())//string
console.log(balance.toString().length)// 3

console.log(balance.toFixed(3));//100.000--->Number of Digits after the Decimal Point Is passed in toFixed() Method

const otherNumber =347.8729
console.log(otherNumber.toPrecision(3));//348--->Make Precise Value Upto mentioned Digit

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000-->add comma considering indian value

//++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++\\

console.log(Math);//Object [Math] {}--> Its an object which conatins properties

console.log(Math.abs(-4));//4--> Gives an absolute value(In positive)
console.log(Math.abs(8));//8

console.log(Math.round(7.8));//8--->Round of the value 

console.log(Math.ceil(4.2));//5---> Gives Ceiling Value

console.log(Math.floor(4.9));//4--->Gives the Floor Value

console.log(Math.min(4,8,23,7,2));//2-->Gives Minimum Value

console.log(Math.max(4,8,23,7,2));//23-->Gives Minimum Value

console.log(Math.random());//Value Lies Bdetween 1 to 0
console.log(Math.random()*10+1)//9.895920061086276
console.log(Math.random()*10+1)//6.670899701210031-->Gives Random Value

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))// Will Give Value Between 10 to 20



