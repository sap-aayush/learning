// java script vairables are dynamic and any data type can be stored in it and changed in the run time

console.log("this is sap") // console.log() prints the content in it...

let sap = 67 //var a = 67 both same
console.log(sap)

a = "sap"  // dynamic as it now stores integer to string
console.log(sap)

// the basic rules of the variable names of the c/c++ also apply here like... case sensitiove, can't start with the number and all

var a = 45;
var b = "sap";
var c = null;
var d = undefined;  // this is equivalent to the --> let d ;

// var was removed as the let and the const were introduced in order to make some variables constant throughout the code

console.log(b)  // b has vlaue "sap"
{
    let b = 78;  // let is a block variable and confines its value within it
    console.log(b)  // b has value 78
}
console.log(b)  // here the value of b is "sap" which is printed

{
    var b = 78;  // var is a global variable and makes its value to change throughout 
    console.log(b)  // b has value 78
}
console.log(b)  // here again the vlaue of the b remains 78

// also the re declaration is possible in the var but not in the let

const author = "sap"  // can't be changed