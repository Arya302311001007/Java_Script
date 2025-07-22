const name = "Arya"
const repoCount = 40
let value
//console.log(name+title+repoCount+value)

//__________________String Interpolation_____________________\\

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//syntax of interpolation

const gameName = new String(`Arya`)//Declaration of string
console.log(gameName)

/*const gameName=new String(`Arya`)
console.log(gameName)
String {'Arya'}0: "A"1: "r"2: "y"3: "a"length: 4//output at browser
[[Prototype]]: String//output at browser
[[PrimitiveValue]]: "Arya"//output at browser
*/
console.log(gameName[0])//A
console.log(gameName[1])//r
console.log(gameName[2])//y
console.log(gameName[3])//a
console.log(gameName.__proto__)//Syntax of Accessing Methods of Prototype

console.log(gameName.length)//To Define the length of the string

console.log(gameName.toUpperCase())//Converts all the string to Uppercase

console.log(gameName.charAt(3))//Returns the Char at the mentioned index position

console.log(gameName.indexOf('a'))// Returns the Index Number

const newString=gameName.substring(0,2)//Takes The First mentioned Index(1) and the Second index(2)
console.log(newString)//i.e last indexing value is not included//Output Ar


const anotherString =gameName.slice(0,3)//As Same as substring but takes Negetive Input
console.log(anotherString)// Ary

const newStringOne= "     Arya     "
console.log(newStringOne.trim())//Removes Starting and Ending space 

const url = "https://arya.com/arya%20das"
console.log(url.replace('%20','_'))// https://arya.com/arya_das

console.log(url.includes('arya'))//true---->Returns Boolean value that says that the Substring exist in the String or not
console.log(url.includes('commm'))//false


const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

const str1=new String (`Arya_Das_123`)
console.log(str1.split('_'))


