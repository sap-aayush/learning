let marks = {
    harry : 99,
    shubham : 5,
    lav : 78,
    aman : 24,
}


// using the for loop of the object makes the items to store in the arrays

for(let i = 0; i< Object.keys(marks);i++){  // remember to use the capital O in the object

    console.log("the marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// by using the simple for in loop
for(let key in marks){
    console.log("the marks of "+key+" are "+marks[key])
}


// Q2 : print try again until the correct number found
var n = prompt("enter the number ")
n = Number.parseInt(n)

while(n!=69){
    var n = prompt("try again")
    n = Number.parseInt(n)
}
console.log("you enterd the correct one")