// check if a particular word is present in the given string by using the .include

const sentence = "the quick brown fox jumps over the lazy dog"
const word1 = "fox"
const word2 = "sap"

console.log(`the word  "${word1}" ${sentence.includes(word1)? 'is': 'is not'} in the sentence`)


console.log(`the word  "${word2}" ${sentence.includes(word2)? 'is': 'is not'} in the sentence`)


let str2 = "please give me Rs 1000"
let amount = Number.parseInt(str2.slice("please give me Rs".length))

console.log(amount)

// try to change the fourth character of the string
let college = "iitbombay"
college[4] = "z"    // does not give error
console.log(college)  // but no change here