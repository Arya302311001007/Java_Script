console.log(2>1)//true
console.log(2<1)//false
console.log(2==1)//false
console.log(2>=1)//true
console.log(2<=1)//false

console.log("2">1)//true-----> But always make sure not to compare different datatypes(and it converts the the different dataytypes into same and then compare)
console.log("02">1)//true-----> "    "      "    "   "   "    "       "         "

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false

//===(Triple Equal)
console.log("2"===2);// It checks The dataType first and then operate.....