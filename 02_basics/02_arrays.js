const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman", "flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//-->Takes Array as a data
//console.log(marvel_heros[3][1])//flash

const allHeros=marvel_heros.concat(dc_heros)//combines two or more array and return a new array
console.log(marvel_heros)//[ 'thor', 'Ironman', 'spiderman' ]
console.log(allHeros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros=[...marvel_heros,...dc_heros] //Spread Operator
console.log(all_new_heros)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)//combine All array into a single array
console.log(real_another_array);//[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Arya"));//false
console.log(Array.from("Arya"));//[ 'A', 'r', 'y', 'a' ]-->converts into array
console.log(Array.from({name:"Arya"}));//[]-->Gives an empty Array to get the array we have to mention key or value(As it is a key value pair)

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]


