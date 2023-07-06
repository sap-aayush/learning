// add number to a string

let a = "sap"
a = a + 8
console.log(a+4)  // in output it just concatenate the string and the number!

console.log(typeof a) // type of the data remains same as the initialization type


//store a number in any const object
const sap = {
    name : "ayush",
    course : "btech",  
    type : "ug",
}

sap = 4   // ERROR

// but the items of the object can be modified as wish

sap['friend'] = "vineet"   // adding a new item
sap['type'] = "pg"

console.log(sap)

// create a word dictionary of 5 words
const dict = {
    appreciate : "knfcndal",
    yakka : "fdljfcelf",
    ataraxia : "vjffwlefkw",
}