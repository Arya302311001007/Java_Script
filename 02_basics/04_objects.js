//const tinderUser = new Object()//We get empty object--->Singleton Object

const tinderUser ={}//---->Non singleton Object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Arya",
            lastname:"Das"
        }
    }

}
console.log(regularUser.fullname.userfullname.firstname);//Arya

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 ={obj1,obj2}
//console.log(obj3);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
//const obj4=Object.assign({},obj1,obj2)//{}---> IS TARGET AND obj1 and obj2 are sources
//console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 ={...obj1,...obj2}//We Will use this syntax
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id:1,
        email:"arya@gmail.com"
    },
    {

    },
    {

    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]---> Makes an array of keys
console.log(Object.values(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]--->Makes an array of Values
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]-->Makes Multiple Array in a single array containing key-value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false






