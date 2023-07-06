// same as the c/c++

let sum = 0

for (let i = 0; i < 500; i++) {
    sum += i

}
console.log(sum)

let object = {
    a : 85, 
    b : 89,
    c : 99,
    d : 87,
}

// for in loop --> this loop through the keys of the object

// here if for of loop used then error
for(let a in object){
    console.log("marks of " + a + " are " + object[a])  // using the fact that the adding simply stick ot the back
}

// for of loop --> this traverse throught eh values of the object
for(let b of "sap_ayush"){
    console.log(b)
}