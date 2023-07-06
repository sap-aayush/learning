let num = [3, 54, 84 , 96, 2]

for(let i=0; i<num.length; i++){
    console.log(num[i])
}

// we can also use the forEach function

num.forEach((element) =>{   // one more bracket
    console.log(element * element)
})

// Array.from("sap")  this is used to create an array from any object

let name = "sap_ayush"
let arr = Array.from(name)
console.log(arr)
