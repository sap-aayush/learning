let name = "sap"
console.log(name.length)

// can be made by the single quoted too...

let friend = 'ayush'
// the string is a pre defined array and stores all its characters as arrays

console.log(friend[0])

let boy1 = "abc"  // here the double quote is must
let boy2 = "xyz"

let sentence1 = `boy1 is a friend of the boy2` // back slash quote
console.log(sentence1)

let sentence2 = `${boy1} is a friend of the ${boy2}` // use the back slash single qoute...
console.log(sentence2)

// escape sequence character 
// in the sentence we need it use the appostrophe which is given by using this 

// like if we add \' then it just add a ' in that place and it is included in the length as a single character instead of the two

// \n for the new line ... \t for the tab and so on ...
// \r for the carriage return

let sentence = "this is ayush\'s pen"
console.log(sentence)

let sentence3 = "is ayush\rs pen"
console.log(sentence3)

// \r --> this first prints the all the things after it and then omits the as much character as it printed for the start and then print the rest ones