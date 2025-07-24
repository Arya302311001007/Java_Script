//singleton--->when making by constructor(Object.create)

//object lierals

const mySym="key1"
const JsUser ={
    name:"Arya",
    "full name:":"Arya Das",
    [mySym]:"mykey1",//Symbol Declaration
    age:26,
    location:"Berhampore",
    email:"arya212344@google.com",
    isLoggedIn:false,
    lastLoginDays:["Saturday","Sunday"]

}
console.log(JsUser.email);//arya212344@google.com
console.log(JsUser["full name:"]);//Arya Das
console.log(JsUser[mySym])//mykey1-->Symbol Access

JsUser.email ="arya1234@google.com"
console.log(JsUser.email);//arya1234@google.com
//Object.freeze(JsUser)//Lock the information that cant be changed
JsUser.email ="arya123456789@google.com"
console.log(JsUser.email);//arya1234@google.com

JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting());//Hello Js User
console.log(JsUser.greeting);//[Function (anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello Js User${this.name}`)
}

console.log(JsUser.greetingTwo())