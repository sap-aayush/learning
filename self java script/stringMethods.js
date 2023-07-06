let name = "aYuSH"

console.log(name.toUpperCase())
console.log(name.toLowerCase())

// slice cuts the part of the string with provided index
console.log(name.slice(2,4))
// if the next argument not givem then it slice till the last

// in the slice we can also write the string to be sliced as an argument by calculating its length see PRACTICE 4


// replace change the particular thung by given thing
let newName = name.replace("aYu", "peR")



// concat adds to the back... we can give as many arguments

let friend = "vineet"
console.log(name.concat("is a friend of ", friend, "OK"))


// trim removes all the spaces  // in the front and the behing not of the between
let friend2 = "       sa     p    "
console.log(friend2.trim())  

// ONE THING THAT IS DIFFERENT IS THAT THE ORIGINAL STRING DO NOT CHANGE RATHER A NEW ONE FORMS