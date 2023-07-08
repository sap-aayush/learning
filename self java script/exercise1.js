// generate a random no and store in a variable and then ask user to guess
// the score ill be 100-no of guesses

let a =  Math.random() * 100
a = Number.parseInt(a)

let b = prompt("enter the number")
b = Number.parseInt(b)

if (a==b) {
    prompt("correct guess")
}
else if(b>a){
    prompt("larger number")
}else if(b<a){
    prompt("smaller no")
}
 while(a!=b){
    b = Number.parseInt(b) 
    if (a==b) {
        prompt("correct guess")
    }
    else if(b>a){
        prompt("larger number")
    }else{
        prompt("smaller no")
    }
}