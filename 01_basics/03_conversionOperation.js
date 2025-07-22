let score ="33abc"
console.log(typeof score)
console.log(typeof (score))
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/* The conversions are as follows 
"33"=>33
"33abc"=>NaN
true=>1, false=>0
*/

let isLoggedIn=1;
let boolIsLoogedIn = Boolean(isLoggedIn)
console.log(boolIsLoogedIn)
/*
1=>true; 0=>false
" "=>false
"Arya"=>true
*/
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)//it will give an output of 33
console.log(typeof stringNumber)// the type will be a string
//********************* Operations **************************\\
let value = 3
let negvalue = -value
console.log(negvalue)//output will be -3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)// 2 to the power 3
console.log(2/3)
console.log(2%3)

let str1="Hello"
let str2="Arya"
let str3= str1+str2
console.log(str3)// HelloArya

console.log("1"+2)//output 12
console.log(1+"2")//output 12
console.log("1"+2+2)//output 122
console.log(1+2+"2")//output 32

//tricky Conversion

console.log(+true)// output 1
console.log(+"")// output 0

