let a = prompt("hey! what's ur age")  // gives a promt at the top

a = Number.parseInt(a)  // this converts the string to the number
// and also ask the user for the vlaue of the a

if (a<0) {
    alert("this is an invalid age")
}
else if(a<9){
    alert("you are a kid")
}
else{
    alert("this is an invalid age")
}

console.log("you can", (a<18? "not drive": "drive"))


// PROMT DON'T RUN IN THE VS CODE