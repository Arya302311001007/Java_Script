//Primitive Datatypes(Call By Value)
//7 types: String, Number,Boolean,Null,undefined,Symbol,BigInt
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let useremail;
const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)//false
const bigNumber = 4535363654642453644876786n

//Non-Primitive(Call By Reference)
//Array,Objects,Functions
const heros= ["Ironman","CaptainAmerica","wolverine"];//Array Declaration

let myObj= {
    name :"Arya",
    age:26,
}//Object Declaration

const myFunction=function(){
    console.log("Hello world")
}

console.table([typeof myFunction,typeof heros, typeof myObj,typeof scoreValue,typeof isLoggedIn,typeof bigNumber,typeof anotherId])


//JavaScript is a dynamic language because variables can hold values of any type, and their type can change at runtime. 
// Type checking happens only when the code runs, not before.