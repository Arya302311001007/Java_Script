//Array--->Javascript arrays are always resizable & contains a mix of different data types
//e.g- const myArr=[1,true,'Arya',7,9]
/*
JavaScript array-copy operations create shallow copies.
 (All standard built-in copy operations with any JavaScript objects create shallow copies, 
 rather than deep copies).
 SHALLOW COPY: A shallow copy of an object is a copy whose properties share the same references 
 (point to the same underlying values) as those of the source object from which the copy was made.
 DEEP COPY: A deep copy of an object is a copy whose properties do not share the same references 
 (point to the same underlying values) as those of the source object from which the copy was made.
*/

const myArr =[0,1,2,3,4,5]//Declaration
const myHeros=["Superman","Batman","Ironman"]//Declaration

const myArr2 = new Array(1,2,3,4)//Declaration
console.log(myArr[1])//1

//_____________________________________Array Methods___________________________________________\\

myArr.push(6)//add 6 in the array
myArr.push(7)//add 7 in the array
myArr.pop()// Remove the last element
console.log(myArr)//[ 0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9)//9 Inserted in the Start of the array
console.log(myArr)//[9, 0, 1, 2,  3, 4, 5, 6]
myArr.shift()// Remove the First Inserted Array
console.log(myArr);//[ 0, 1, 2,  3, 4, 5, 6]
 
console.log(myArr.includes(9));// false
console.log(myArr.indexOf(19));// -1 --->As 19 does not exist in the Array....For any number does not exist in the array it will give an output of -1.

const newArr = myArr.join()//Adds all the element of  an Array into a String

console.log(myArr);// It will print the Array
console.log(newArr);//It will print the String
console.log(typeof newArr);//string
console.log(typeof myArr);//object

//Slice, Splice

console.log("A",myArr); //A[0,1,2,3,4,5,6]

const myN1=myArr.slice(1,3)
console.log(myN1);//[1,2]
console.log("B",myArr);//B[0,1,2,3,4,5,6]

const myN2 = myArr.splice(1,3)
console.log(myN2);//[1,2,3]--->The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log("C",myArr);//[0,4,5,6]//The Splice Method Manupulate the main array by removing the array element of mentioned index






